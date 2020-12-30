import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test on <GifExpertApp />', () => {
    const wrapper = shallow(<GifExpertApp />)

    test('should render <GifExpertApp />', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should render a list of categories', () => {
        const categories = ['One punch man', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
