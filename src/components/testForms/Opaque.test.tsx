import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Opaque from './Opaque';

Enzyme.configure({ adapter: new Adapter() })

describe('Opaque', () => {
    test('Thou shall not be 0', () => {
        const wrapper = shallow(<Opaque/>)
        
        //expect(wrapper.instance().testHTTP(results)).not.toBe(null);
    })

    Object.defineProperty(window, "localStorage", {
        value: {
            getItem: jest.fn(() => "123"),
            setItem: jest.fn(() => 3)
        },
        writable: true
    })

    test('Thou shall not be 0 x2', () => {
        const wrapper = shallow(<Opaque/>)
        console.log(window.localStorage.getItem('test'));
        expect(wrapper.instance().testHTTP()).toBe(null);
    }) 
})
    