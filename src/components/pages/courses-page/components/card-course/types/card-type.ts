import { GetCourseDTO } from '@/api/types/getCoursesDTO';

export type cardType = Omit<
  GetCourseDTO,
  | 'launchDate'
  | 'lessons'
  | 'containsLockedLessons'
  | 'status'
  | 'duration'
  | 'meta'
> & {
  skills: string[];
  previewVideo: string;
};
