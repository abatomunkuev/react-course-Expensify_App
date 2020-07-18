import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot()
})


// LoginPage test file -> Should call startLogin on button click
test('should call startLogout on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})
