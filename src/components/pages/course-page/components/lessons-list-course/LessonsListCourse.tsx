import React from 'react';

import { GetCourseDTO } from '@/api/types/getCoursesDTO';
import ListCourse from '@/components/pages/course-page/components/list-course';

export interface LessonsListCourseProps {
  course: GetCourseDTO;
  setLesson: React.Dispatch<React.SetStateAction<number>>;
}

const LessonsListCourse: React.FC<LessonsListCourseProps> = ({
  course,
  setLesson,
}) => (
  <>
    {course.lessons
      .slice()
      .sort((s1, s2) => s1.order - s2.order)
      .map(lesson =>
        lesson.status === 'unlocked' ? (
          <ListCourse
            key={lesson.id}
            className={'list-content'}
            order={lesson.order}
            title={lesson.title}
            duration={lesson.duration}
            onClick={() => setLesson(lesson.order - 1)}
          />
        ) : (
          <ListCourse
            key={lesson.id}
            className={'list-content-locked'}
            order={lesson.order}
            title={lesson.title}
            duration={lesson.duration}
          />
        ),
      )}
  </>
);
export default LessonsListCourse;
