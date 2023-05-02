import React from 'react';

import { GetCoursesDTO } from '@/api/types/getCoursesDTO';
import CardCourse from '@/components/pages/courses-page/components/card-course';

export interface SlicedCardCourseProps {
  courses: GetCoursesDTO;
  visited: number;
  elementsEach: number;
}

const SlicedCardCourse: React.FC<SlicedCardCourseProps> = ({
  courses,
  visited,
  elementsEach,
}) => (
  <>
    {courses.courses.slice(visited, visited + elementsEach).map(course => (
      <CardCourse key={course.id} course={course} />
    ))}
  </>
);
export default SlicedCardCourse;
