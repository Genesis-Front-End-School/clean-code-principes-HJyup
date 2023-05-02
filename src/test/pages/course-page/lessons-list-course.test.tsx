import React from 'react';
import { render, screen } from '@testing-library/react';

import LessonsListCourse from '@/components/pages/course-page/components/lessons-list-course';
import { testCourseData } from '@/test/const/testCourseData';

import '@testing-library/jest-dom';

describe('Describe lessons list course', () => {
  it('It should check that data are correspond to values', () => {
    render(<LessonsListCourse course={testCourseData} setLesson={jest.fn()} />);
    const lessons = screen.getAllByRole('lesson');

    lessons.forEach((lesson, index) => {
      expect(lesson).toHaveTextContent(testCourseData.lessons[index].title);
    });
  });
});
