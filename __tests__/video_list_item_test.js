import React from 'react';
import VideoListItem from '../src/components/video_list_item';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('renders the VideoListItem component correctly', () => {
  const props = {
    video:
      {
        default: {
        url: 'test'
      }
    }
  };
  const tree = renderer.create(
    <VideoListItem {...props}/>
  ).toJSON();
  expect(tree).toMatchSnapshot
});

test('renders thumbnail', () => {
  const props = {
    video:
      {
        default: {
        url: 'test'
      }
    }
  };

  const wrapper = shallow(<VideoListItem {...props}/>);
  const image = wrapper.find('img');

  expect(enzymeWrapper.find('h1').text()).toBe('')
});
