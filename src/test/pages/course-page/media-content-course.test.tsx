import React from 'react';
import { render, screen } from '@testing-library/react';

import MediaContentCourse from '@/components/pages/course-page/components/media-content-course';
import { testCourseData } from '@/test/const/testCourseData';

import '@testing-library/jest-dom';

describe('Media content course description', () => {
  beforeEach(() => {
    render(
      <MediaContentCourse
        title={testCourseData.lessons[0].title}
        courseDescription={testCourseData.description}
        rating={testCourseData.rating}
        launchDate={testCourseData.launchDate}
        status={testCourseData.status}
        skills={testCourseData.meta.skills}
        videoLink={testCourseData.lessons[0].link}
      />,
    );
  });

  it('It should display video component', () => {
    const video = document.querySelector('video') as HTMLVideoElement;
    expect(video).toBeInTheDocument();
  });

  it('It should render skills properly', () => {
    const skills = screen.getAllByRole('skill');

    skills.forEach((skill, index) => {
      expect(skill).toHaveTextContent(testCourseData.meta.skills[index]);
    });
  });

  it('It should display a data properly', () => {
    const testCorrectData = 'Launch date: 2023/2/1';

    const checkData = screen.getByText(testCorrectData);
    expect(checkData).toBeInTheDocument();
  });
});
