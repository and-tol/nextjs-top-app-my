import cn from 'classnames';
import { SidebarProps } from './Sidebar.config';
import styles from './Layout.module.css';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} >
      Sidebar
      <Menu/>
    </div>
  );
};
