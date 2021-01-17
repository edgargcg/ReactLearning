import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Test on <HookApp />', () => {
    
    
    test('should render component', () => {
        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();
    })
    
})
