import React from 'react';
import VideoItem from '../src/components/video_item';
import renderer from 'react-test-renderer';

test('renders the VideoItem component correctly', () => {
  const props = {
    video: { default: 'id' }
  };

  const tree = renderer.create(
    <VideoItem {...props}/>
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
