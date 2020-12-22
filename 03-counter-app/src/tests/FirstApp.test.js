import React from 'react';
import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import FirstApp from "../FirstApp";
import '@testing-library/jest-dom';

describe('Test on <FirstApp />', () => {

    // test('should render message', () => {
    //     const name = 'Edgar';
    //     const greeting = `Hello World ${name}`;

    //     const { getByText } = render(<FirstApp name={name} />);

    //     expect(getByText(greeting)).toBeInTheDocument();
    // })

    test('should render <FirstApp />', () => {
        const name = 'Edgar';
        const wrapper = shallow(<FirstApp name={name} />);
        
        expect(wrapper).toMatchSnapshot();
    })   
    
    test('should render subtitle in props', () => {
        const name = 'Edgar';
        const subtitle = "Let's play!!";
        const wrapper = shallow(
            <FirstApp 
                name={name} 
                subtitle={subtitle}
            />
        );
        
        const subtitleElementText = wrapper.find('h4').text();

        expect(subtitleElementText).toBe(subtitle);
    })
    
    
})
