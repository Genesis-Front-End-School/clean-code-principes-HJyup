import React from 'react';
import { render, screen } from '@testing-library/react';

import LessonsListCourse from '@/components/pages/course-page/components/lessons-list-course';
import { testCourseData } from '@/test/const/testCourseData';

import '@testing-library/jest-dom';

describe('Describe lessons list course', () => {
  beforeEach(() => {
    render(<LessonsListCourse course={testCourseData} setLesson={jest.fn()} />);
  });

  it('It should check that data are correspond to values', () => {
    const lessons = screen.getAllByRole('lesson');

    lessons.forEach((lesson, index) => {
      expect(lesson).toHaveTextContent(testCourseData.lessons[index].title);
    });
  });

  it('It should check that data length is correct', () => {
    const lessons = screen.getAllByRole('lesson');

    expect(lessons.length).toBe(testCourseData.lessonsCount);
  });

  it('It should check that video has correct classNames', () => {
    const lessons = screen.getAllByRole('lesson');

    lessons.forEach((lesson, index) => {
      expect(lesson).toHaveClass(
        testCourseData.lessons[index].status === 'unlocked'
          ? 'list-content'
          : 'list-content-locked',
      );
    });
  });
});
