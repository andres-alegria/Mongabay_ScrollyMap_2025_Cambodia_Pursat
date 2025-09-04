import React from 'react';
import cx from 'classnames';
import CocaIcon from './coca';
import PlaneIcon from './plane';

const LegendIcon = ({ icon }) => {
  let Component = null;
  let classList = '';

  switch (icon) {
    case 'plane':
      classList = 'border-0.75 border-primary text-primary';
      Component = <PlaneIcon />;
      break;
    case 'coca':
      classList = 'text-white bg-mongazon';
      Component = <CocaIcon />;
      break;
    default:
      console.warn(`Unsupported icon:`, icon);
      Component = null;
      break;
  }

  return <div className={cx('flex w-6 h-6 rounded-full ', classList)}>{Component}</div>;
};

export default LegendIcon;
