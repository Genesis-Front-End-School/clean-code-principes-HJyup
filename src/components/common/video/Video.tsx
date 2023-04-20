import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

import styles from './Video.module.scss';

interface VideoProps {
  source: string;
  hasControls: boolean;
}

const Video: React.FC<VideoProps> = ({ source, hasControls }) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const hls = new Hls();
  const videoEl = useRef<HTMLVideoElement>(null);
  const playbackRateChange = 0.2;

  useEffect(() => {
    if (videoEl.current) {
      hls.attachMedia(videoEl.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(source);
      });
      const savedTime = localStorage.getItem(source);
      if (savedTime !== null) {
        videoEl.current.currentTime = parseFloat(savedTime);
      }
    }
  }, [hls, source]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLVideoElement>) => {
    if (e.key === ',' && playbackRate > playbackRateChange) {
      setPlaybackRate(playbackRate - playbackRateChange);
    } else if (e.key === '.') {
      setPlaybackRate(playbackRate + playbackRateChange);
    }
  };

  const handleTimeUpdate = () => {
    if (videoEl.current) {
      localStorage.setItem(source, videoEl.current.currentTime.toString());
    }
  };

  const handleRightCLick = (e: any) => {
    e.preventDefault();
    videoEl.current?.requestPictureInPicture();
  };

  useEffect(() => {
    if (videoEl.current) {
      videoEl.current.playbackRate = Math.max(playbackRate, 0);
    }
  }, [playbackRate]);

  return (
    <div className={styles['video']}>
      {hasControls ? (
        <video
          ref={videoEl}
          controls
          className={styles['video']}
          onKeyUp={handleKeyPress}
          onTimeUpdate={handleTimeUpdate}
          onContextMenu={handleRightCLick}
        />
      ) : (
        <video ref={videoEl} autoPlay className={styles['video']} muted />
      )}
    </div>
  );
};

export default Video;
