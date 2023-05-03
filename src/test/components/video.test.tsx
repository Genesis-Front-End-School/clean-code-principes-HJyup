import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Video from '@/components/common/video';

import '@testing-library/jest-dom';

describe('Describe video component', () => {
  const source = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  const videoWithoutControls = <Video source={source} hasControls={false} />;
  const videoWithControls = <Video source={source} hasControls={true} />;

  it('It should display a video', () => {
    render(videoWithoutControls);
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video).toBeInTheDocument();
  });

  it('It should display video without controls with autoplay attribute', () => {
    render(videoWithoutControls);
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video).toHaveAttribute('autoplay');
  });

  it('It should display video with controls', () => {
    render(videoWithControls);
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video).toHaveAttribute('controls');
  });

  it('It should be correct playbackRate for video when press .', () => {
    render(videoWithControls);
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video.playbackRate).toBe(1);

    fireEvent.keyUp(video, { key: '.' });

    expect(video.playbackRate).toBe(1.2);
  });

  it('It should be correct playbackRate for video when press ,', () => {
    render(videoWithControls);
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video.playbackRate).toBe(1);

    fireEvent.keyUp(video, { key: ',' });

    expect(video.playbackRate).toBe(0.8);
  });
});
