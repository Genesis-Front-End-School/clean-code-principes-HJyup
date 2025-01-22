import React from 'react';

import { GetCourseDTO, Lesson } from '@/api/types/getCoursesDTO';
import ListCourse from '@/components/pages/course-page/components/list-course';

export interface LessonsListCourseProps {
  course: GetCourseDTO;
  setLesson: React.Dispatch<React.SetStateAction<number>>;
}

const LessonsListCourse: React.FC<LessonsListCourseProps> = ({
  course,
  setLesson,
}) => {
  const handleOnClick = (status: string, order: number) => {
    if (status === 'unlocked') {
      setLesson(order - 1);
    }
  };
  const statusClassName = (lesson: Lesson) =>
    lesson.status === 'unlocked' ? 'list-content' : 'list-content-locked';

  return (
    <>
      {course.lessons
        .slice()
        .sort((s1, s2) => s1.order - s2.order)
        .map(lesson => (
          <ListCourse
            key={lesson.id}
            role="lesson"
            className={statusClassName(lesson)}
            order={lesson.order}
            title={lesson.title}
            duration={lesson.duration}
            onClick={() => handleOnClick(lesson.status, lesson.order)}
          />
        ))}
    </>
  );
};
export default LessonsListCourse;
