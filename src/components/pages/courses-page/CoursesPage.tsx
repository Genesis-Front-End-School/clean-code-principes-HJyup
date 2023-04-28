import { useQuery } from 'react-query';
import { CircularProgress, Typography } from '@mui/material';
import { Alert } from '@mui/material';
import { Pagination } from '@mui/material';

import { CoursesAPI } from '@/api/courses-api/CoursesAPI';
import Navbar from '@/components/common/navbar';
import SlicedCardCourse from '@/components/pages/courses-page/components/sliced-card-course';
import usePagination from '@/hooks/usePagination';

import styles from './CoursesPage.module.scss';

const CoursesPage = () => {
  const [paginationCount, setPaginationCount] = usePagination();
  const {
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
    data: courses,
  } = useQuery(['courses'], () => CoursesAPI.getCourses(), {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const coursesPerPagination = 10;
  const elementsVisited = paginationCount * coursesPerPagination;

  const pagesNumber = courses
    ? Math.ceil(courses.courses.length / coursesPerPagination)
    : 0;

  if (isLoadingCourses) return <CircularProgress />;

  if (isErrorCourses)
    return (
      <Alert variant="filled" severity="error">
        Finding problems with uploading data - Check later!
      </Alert>
    );

  return (
    courses && (
      <div className={styles['page-container']}>
        <Navbar />
        <div className={styles['card-course-container']}>
          <div className={styles['page-information']}>
            <Typography variant={'h6'}>
              Courses
              <p>{courses.courses.length} results in Study Lounge</p>
            </Typography>
            <Pagination
              count={pagesNumber}
              color="primary"
              size="small"
              className={styles['pagination']}
              onChange={setPaginationCount}
            />
          </div>
          <SlicedCardCourse
            courses={courses}
            visited={elementsVisited}
            elementsEach={coursesPerPagination}
          />
        </div>
      </div>
    )
  );
};

export default CoursesPage;
