import { shallow } from 'enzyme';
import { GifGrid } from '../../../Components/Gifs/GifGrid';
import { useFetchGifs } from '../../../Hooks/useFetchGifs';

jest.mock('../../../Hooks/useFetchGifs');

describe('Test on <GifGrid />', () => {
    const category = 'Batman';
    
    test('should render <GifGrid />', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should render items on load images with useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://jola.com',
                title: 'Cualquier cosa'
            },
            {
                id: '123',
                url: 'https://jola.com',
                title: 'Cualquier cosa'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
        
    
})
