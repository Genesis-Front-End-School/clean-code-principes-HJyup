import React, { useEffect, useState } from 'react';
import { Switch } from '@mui/material';

const SwitchComponent = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem('switchState') === 'true' || false,
  );

  useEffect(() => {
    localStorage.setItem('switchState', checked.toString());
  }, [checked]);

  const handleToggle = () => {
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <Switch
      id="switch"
      color="default"
      checked={checked}
      onChange={handleToggle}
    />
  );
};

export default SwitchComponent;
