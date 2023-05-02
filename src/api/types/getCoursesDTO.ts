export type GetCourseDTO = {
  id: string;
  title: string;
  tags: string[];
  launchDate: Date;
  status: 'locked' | 'unlocked';
  description: string;
  duration: number;
  previewImageLink: string;
  rating: number;
  lessonsCount: number;
  meta: {
    slug: string;
    skills: string[];
    courseVideoPreview: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  };
  lessons: Lesson[];
  containsLockedLessons: boolean;
};

export type Lesson = {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: string;
  link: string;
  previewImageLink: string;
  meta: string | null;
};

export type GetCoursesDTO = {
  courses: GetCourseDTO[];
};
