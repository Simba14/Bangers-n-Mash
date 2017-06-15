import React from 'react';
import VideoListItem from '../src/components/video_list_item';
import renderer from 'react-test-renderer';

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
  expect(tree).toMatchSnapshot()
});
