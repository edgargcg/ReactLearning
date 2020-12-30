import { shallow } from 'enzyme';
import { CategoryAdd } from "../../../Components/Categories/CategoryAdd";

describe('Test on <CategoryAdd />', () => {
    const setCategory = jest.fn();
    let wrapper = shallow(<CategoryAdd setCategory={setCategory} />);

    beforeEach(
        () => {
            jest.clearAllMocks();
            wrapper = shallow(<CategoryAdd setCategory={setCategory} />);
        }
    );

    test('should render <CategoryAdd />', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should have a value on type on input', () => {
        const value = 'batman';
        const input = wrapper.find('input');
        
        input.simulate('change', { target: { value } });

        const inputAfterChange = wrapper.find('input');
        const result = inputAfterChange.props().value;
        
        expect(result).toBe(value);
    })
    
    test('should not get the data on submit', () => {
        wrapper.find('form').simulate(
            'submit', 
            { preventDefault(){} }
        );
        
        expect(setCategory).not.toHaveBeenCalled();
    })
    
    test('should call setCategory and clean input control', () => {
        const value = 'batman';
        wrapper
            .find('input')
            .simulate('change', { target: { value } });

        wrapper
            .find('form')
            .simulate('submit', { preventDefault(){} });
        
        expect(setCategory).toHaveBeenCalled();

        const finalValue = wrapper.find('input').props().value;

        expect(finalValue).toBe('');    
    })
    

})
