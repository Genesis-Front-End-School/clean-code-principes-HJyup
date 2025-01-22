import React from 'react';
import { Chip, Rating } from '@mui/material';

import { Video } from '@HJyup/study-lounge-lib';
import { dateTransform } from '@/utility';

import styles from './MediaContentCourse.module.scss';

export interface MediaContentCourseProps {
  title: string;
  courseDescription: string;
  rating: number;
  launchDate: Date;
  status: string;
  skills: string[];
  videoLink: string;
}

const MediaContentCourse: React.FC<MediaContentCourseProps> = ({
  title,
  courseDescription,
  rating,
  launchDate,
  status,
  skills,
  videoLink,
}) => {
  const stringDate = dateTransform(new Date(launchDate));

  const skillsSelection = skills?.map((skill, index) => (
    <div key={index} role={'skill'}>
      {skill}
    </div>
  ));

  return (
    <div className={styles['main-container']}>
      {videoLink && <Video source={videoLink} hasControls={true} />}
      <p className={styles['title']}>{title}</p>
      <p className={styles['description']}>{courseDescription}</p>
      <div className={styles['course-information']}>
        <div className={styles['rating']}>
          <Rating value={rating} precision={0.5} size="large" readOnly />
          <div className={styles['course-rating']}>Course Rating</div>
        </div>
        <div className={styles['skills']}>{skillsSelection}</div>
        <div className={styles['date-and-status']}>
          <div>{'Launch date: ' + stringDate}</div>
          <div className={styles['status']}>
            {'Status:'}
            <Chip
              size="small"
              label={status}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaContentCourse;
