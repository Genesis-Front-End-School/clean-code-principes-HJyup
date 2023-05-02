import React from 'react';
import { render } from '@testing-library/react';

import Video from '@/components/common/video';

import '@testing-library/jest-dom';

describe('Describe video component', () => {
  const source = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  const videoWithoutControls = <Video source={source} hasControls={false} />;

  it('It should display a video', () => {
    render(videoWithoutControls);
    const video = document.querySelector('video') as HTMLMediaElement;

    expect(video).toBeInTheDocument();
  });
});
