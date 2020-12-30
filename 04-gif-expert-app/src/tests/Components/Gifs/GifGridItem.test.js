import { shallow } from 'enzyme';
import { GifGridItem } from '../../../Components/Gifs/GifGridItem';

describe('Tests on GifGridItem', () => {
    const title = 'Batman';
    const url = 'https://holamundo.jpg';
    const wrapper = shallow(
        <GifGridItem 
            title={title} 
            url={url} 
        />
    );
    
    test('should render a GifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should have a paragraph with title', () => {
        const paragraph = wrapper.find('h5').text().trim();
        expect(paragraph).toBe(title);
    })
    
    test('should image have all properties', () => {
        const image = wrapper.find('img');
        const alt = image.props().alt;
        const src = image.props().src;

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })
    
    test('should div container have className for animation', () => {
        const div = wrapper.find('div');
        const className = div.props().className;
        
        expect(className.includes('animate__animated')).toBe(true);
    })
    

})
