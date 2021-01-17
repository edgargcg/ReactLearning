import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../Components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../Hooks/useFetch';

jest.mock('../../../Hooks/useFetch');

describe('Test on <MultipleCustomHooks />', () => {
    
    test('should render <MultipleCustomHooks />', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should display information', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Edgar Campos',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
    
        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola Mundo' );
        
    })
    
    

})
