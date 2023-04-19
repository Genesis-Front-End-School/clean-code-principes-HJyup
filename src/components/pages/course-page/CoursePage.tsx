import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Alert, AlertTitle, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';

import { CoursesAPI } from '@/api/courses-api/CoursesAPI';
import Navbar from '@/components/common/navbar';
import LessonsListCourse from '@/components/pages/course-page/components/lessons-list-course';
import MediaContentCourse from '@/components/pages/course-page/components/media-content-course';

import styles from './CoursePage.module.scss';

const CoursePage = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);
  const router = useRouter();
  const id = router.query.courseid as string;

  const { isLoading, isError, data } = useQuery(
    [['courses'], id],
    () => CoursesAPI.getCourse(id),
    { retry: false, refetchOnWindowFocus: false },
  );

  if (isLoading) return <CircularProgress />;

  if (isError)
    return (
      <Alert variant="filled" severity="error">
        Finding problems with uploading data - Check later!
      </Alert>
    );

  return (
    <div className={styles['page-container']}>
      <Navbar text={data?.title} />
      {data && (
        <div className={styles['card-course-container']}>
          <div className={styles['video-container']}>
            <MediaContentCourse
              title={data.lessons[selectedLesson].title}
              courseDescription={data.description}
              rating={data.rating}
              launchDate={data.launchDate}
              status={data.status}
              skills={data.meta.skills}
              videoLink={data.lessons[selectedLesson].link}
            />
          </div>
          <div className={styles['information-container']}>
            <Alert severity="info" className={styles['alert']}>
              <AlertTitle>Use Video Shortcuts</AlertTitle>
              Use (,) and (.) to set video speed. Use Right Click to enter
              Picture in Picture mode.
            </Alert>
            <div className={styles['list-content-title']}>
              <p>Course Content</p>
            </div>
          </div>
          <LessonsListCourse course={data} setLesson={setSelectedLesson} />
        </div>
      )}
    </div>
  );
};

export default CoursePage;
