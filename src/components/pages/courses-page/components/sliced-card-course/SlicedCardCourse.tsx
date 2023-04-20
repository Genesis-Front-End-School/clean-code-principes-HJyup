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
      <CardCourse
        key={course.id}
        courseId={course.id}
        title={course.title}
        description={course.description}
        image={course.previewImageLink}
        rating={course.rating}
        skills={course.meta.skills}
        tags={course.tags}
        previewVideo={course.meta?.courseVideoPreview?.link}
        lessonsCount={course.lessonsCount}
      />
    ))}
  </>
);
export default SlicedCardCourse;
