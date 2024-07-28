import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

import { MdOutlinePostAdd } from 'react-icons/md';
import { LiaListUlSolid } from 'react-icons/lia';

const navLinks = [
  {
    id: 0,
    label: 'add job',
    path: '.',
    icon: <MdOutlinePostAdd />,
    iconSource:
      'react-icons, https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
  {
    id: 1,
    label: 'all jobs',
    path: 'all-jobs',
    icon: <LiaListUlSolid />,
    iconSource:
      'react-icons, https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
  {
    id: 2,
    label: 'stats',
    path: 'stats',
    icon: <IoBarChartSharp />,
    iconSource:
      'react-icons, https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
  {
    id: 3,
    label: 'profile',
    path: 'profile',
    icon: <ImProfile />,
    iconSource:
      'react-icons, https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
  {
    id: 4,
    label: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
    iconSource:
      'react-icons, https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
];
