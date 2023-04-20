import { client } from '@/api/courses-api/instance';
import { GetCourseDTO, GetCoursesDTO } from '@/api/types/getCoursesDTO';

import { getAuthorisationHeader } from '../utils';

export class CoursesAPI {
  static async getCourses(): Promise<GetCoursesDTO> {
    const { data } = await client.get(
      '/core/preview-courses',
      getAuthorisationHeader(),
    );
    return data;
  }

  static async getCourse(courseId: string): Promise<GetCourseDTO> {
    const { data } = await client.get(
      `/core/preview-courses/${courseId}`,
      getAuthorisationHeader(),
    );
    return data;
  }
}
