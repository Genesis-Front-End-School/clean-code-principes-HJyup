import React, { useState } from 'react';

import { GetCoursesDTO } from '@/api/types/getCoursesDTO';

const usePagination = (courses: GetCoursesDTO | undefined) => {
  const [pagesCount, setPagesCount] = useState(0);

  const handleChangeElement = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPagesCount(value - 1);
  };

  const coursesPerPagination = 10;
  const elementsVisited = pagesCount * coursesPerPagination;

  const pagesNumber = courses
    ? Math.ceil(courses.courses.length / coursesPerPagination)
    : 0;

  return [
    elementsVisited,
    pagesNumber,
    coursesPerPagination,
    handleChangeElement,
  ] as const;
};

export default usePagination;
