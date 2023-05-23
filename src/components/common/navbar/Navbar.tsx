import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

import SwitchComponent from '@/components/common/switch';

import styles from './Navbar.module.scss';

interface NavbarProps {
  text?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  text = 'Different knowledge in one place',
}) => (
  <div className={styles['navbar-container']}>
    <AppBar position={'fixed'} className={styles['navbar']}>
      <Toolbar className={styles['navbar-container']}>
        <div className={styles['title']}>
          Study Lounge
          <div className={styles['dark-theme']}>
            Dark Theme
            <SwitchComponent />
          </div>
        </div>
        <div className={styles['subtitle']}>{text}</div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
