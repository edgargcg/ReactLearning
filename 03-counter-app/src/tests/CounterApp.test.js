import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Test on <CounterApp />', () => {
    let defaultValue = 100;
    const wrapper = shallow(<CounterApp />);
    const wrapperWithDefault = shallow(<CounterApp value={defaultValue} />);
    
    beforeEach(
        () => {
            defaultValue = 100;
        }
    );

    test('should render <CounterApp />', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should render <CounterApp /> with default value', () => {
        const valueShowed = wrapperWithDefault.find('h2').text();

        expect(valueShowed).toBe(`${defaultValue}`);
    })
    
    test('on <CounterApp /> should substract on click container__button-substrac button', () => {
        wrapperWithDefault.find('.container__button-substract').simulate('click');

        const result = wrapperWithDefault.find('h2').text();
        expect(result).toBe(`${defaultValue - 1}`);
    })

    test('on <CounterApp /> should reset value  on click container__button-reset button', () => {
        wrapperWithDefault.find('.container__button-substract').simulate('click');
        wrapperWithDefault.find('.container__button-substract').simulate('click');
        wrapperWithDefault.find('.container__button-substract').simulate('click');
        
        wrapperWithDefault.find('.container__button-reset').simulate('click');
        
        const result = wrapperWithDefault.find('h2').text();
        expect(result).toBe(`${defaultValue}`);
    })
    
    test('on <CounterApp /> should substract on click container__button-add button', () => {
        wrapperWithDefault.find('.container__button-add').simulate('click');

        const result = wrapperWithDefault.find('h2').text();
        expect(result).toBe(`${defaultValue + 1}`);
    })

})
