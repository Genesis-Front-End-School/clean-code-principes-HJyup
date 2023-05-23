import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import CardCourse from '@/components/pages/courses-page/components/card-course';
import { testCourseData } from '@/test/const/testCourseData';
import { fixImagePath } from '@/utility';

import '@testing-library/jest-dom';

describe('Describe course card', () => {
  beforeEach(() => render(<CardCourse course={testCourseData} />));

  it('It should render the image of the course', () => {
    const img = document.querySelector('img') as HTMLImageElement;

    expect(img).toBeInTheDocument();
  });

  it('It should render the image with proper attributes', () => {
    const img = document.querySelector('img') as HTMLImageElement;

    expect(img).toHaveAttribute(
      'src',
      fixImagePath(testCourseData.previewImageLink),
    );
    expect(img).toHaveAttribute('alt', 'Course preview image');
  });

  it('It should have video invisible when card not hover', () => {
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video).not.toBeInTheDocument();
  });

  it('It should display video when you hover', async () => {
    const component = screen.getByRole('card');

    fireEvent.mouseEnter(component);

    const video = document.querySelector('video') as HTMLVideoElement;

    await waitFor(() => {
      expect(video).toBeInTheDocument();
    });
  });
});
