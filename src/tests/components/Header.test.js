// react-test-render allow us to render our components inside of regular javascript code 
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';
// Enzyme released by AirBnB is a renderer for React, which has more features 

// 2 way to test: shallow rendering and full DOM rendering

test('should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header startLogout={()=> {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

// should call startLogout on button click
test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})
