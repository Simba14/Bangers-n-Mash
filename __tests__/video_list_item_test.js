import React from 'react';
import VideoListItem from '../src/components/video_list_item';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// test('renders the VideoListItem component correctly', () => {
//   const tree = renderer.create(
//     <VideoListItem />
//   ).toJSON();
//   expect(tree).toMatchSnapshot
// });

test('renders thumbnail', () => {
  const wrapper = shallow(<VideoListItem />);
  expect(wrapper.find(<img />).length).toBe(1);
});
