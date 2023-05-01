import React, { useState } from 'react';
import { Card, Chip, Rating } from '@mui/material';
import Link from 'next/link';

import { GetCourseDTO } from '@/api/types/getCoursesDTO';
import Video from '@/components/common/video';
import { getCourseCardData } from '@/components/pages/courses-page/components/card-course/utils/getCourseCardData';
import { fixImagePath } from '@/utility';

import styles from './CardCourse.module.scss';

export interface CardCourseProps {
  course: GetCourseDTO;
}

const CardCourse: React.FC<CardCourseProps> = ({ course }) => {
  const [isVideo, setIsVideo] = useState(false);
  const courseCard = getCourseCardData(course);

  const skillSelection = courseCard.skills.map((skill, index) => (
    <p key={index}>{skill}</p>
  ));

  const handleMouseEnter = () => {
    if (isVideo) {
      return <Video source={courseCard.previewVideo} hasControls={false} />;
    }
  };

  return (
    <Link href={`/course/${courseCard.id}`} className={styles['link']}>
      <Card
        className={styles['card']}
        onMouseEnter={() => setIsVideo(true)}
        onMouseLeave={() => setIsVideo(false)}
      >
        <img
          src={fixImagePath(courseCard.previewImageLink)}
          className={styles['image']}
          alt="Course preview image"
        />
        <div className={styles['video']}>{handleMouseEnter()}</div>
        <div className={styles['information']}>
          <div className={styles['title']}>{courseCard.title}</div>
          <div className={styles['tags']}>
            <Chip
              label={courseCard.tags}
              color="primary"
              variant="outlined"
              className={styles['chip']}
            />
            <Rating
              name="Course Rating"
              value={courseCard.rating}
              readOnly
              className={styles['rating']}
              precision={0.5}
            />
          </div>
          <div className={styles['description']}>{courseCard.description}</div>
          <div className={styles['skills']}>{skillSelection}</div>
        </div>
        <div className={styles['lessons-count']}>
          Lessons: {courseCard.lessonsCount}
        </div>
      </Card>
    </Link>
  );
};

export default CardCourse;
