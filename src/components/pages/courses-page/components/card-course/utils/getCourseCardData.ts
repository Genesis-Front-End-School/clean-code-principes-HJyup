import { GetCourseDTO } from '@/api/types/getCoursesDTO';
import { cardType } from '@/components/pages/courses-page/components/card-course/types/card-type';

export const getCourseCardData = (course: GetCourseDTO) => {
  const courseSliced: cardType = {
    id: course.id,
    title: course.title,
    description: course.description,
    previewImageLink: course.previewImageLink,
    rating: course.rating,
    skills: course.meta.skills,
    tags: course.tags,
    previewVideo: course.meta.courseVideoPreview.link,
    lessonsCount: course.lessonsCount,
  };
  return courseSliced;
};
