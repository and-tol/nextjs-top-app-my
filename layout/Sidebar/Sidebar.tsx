import { SidebarProps } from './Sidebar.config';
import { Menu } from '../Menu/Menu';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import Logo from '../logo.svg';
import React from 'react';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};
