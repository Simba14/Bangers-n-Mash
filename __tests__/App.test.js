import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { shallow, mount } from 'enzyme';
import Header from '../src/components/header';
import VideoItem from '../src/components/video_item';
import VideoList from '../src/components/video_item';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders a Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).length).toBe(1);
});

test('renders a VideoItem component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(VideoItem).length).toBe(1);
});

test('renders two VideoList components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(VideoList).length).toBe(1);
});

function setup() {
  const enzymeWrapper = mount(<App />)

  return {
    enzymeWrapper
  }
}

test('renders heading with text "Boiler Room Picks"', () => {
  const { enzymeWrapper } = setup()

  expect(enzymeWrapper.find('Header').text()).toBe('Boiler Room Picks');
});
