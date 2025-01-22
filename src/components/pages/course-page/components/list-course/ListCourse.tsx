import React from 'react';
import { TimelapseOutlined } from '@mui/icons-material';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';

import { splitDuration } from '@/utility';

import styles from './ListCourse.module.scss';

interface ListCourseProps extends React.ComponentPropsWithoutRef<'div'> {
  order: number;
  title: string;
  duration: number;
  className: string;
}

const ListCourse: React.FC<ListCourseProps> = ({
  order,
  title,
  duration,
  className,
  ...rest
}) => {
  const durationSplit = splitDuration(duration);

  return (
    <div className={styles[className]} {...rest}>
      <div className={styles['title']}>
        <p>{order + '. ' + title}</p>
        {className === 'list-content-locked' && (
          <LockClockOutlinedIcon
            data-cy="LockClockOutlinedIcon"
            color="disabled"
            fontSize="small"
          />
        )}
      </div>
      <div className={styles['duration']}>
        <TimelapseOutlined color="disabled" fontSize="small" />
        {durationSplit[0] + '.' + durationSplit[1] + ' minutes to complete'}
      </div>
    </div>
  );
};

export default ListCourse;
