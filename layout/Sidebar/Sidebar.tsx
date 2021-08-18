import cn from 'classnames';
import { SidebarProps } from './Sidebar.config';
import styles from './Layout.module.css';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} >
      Sidebar
    </div>
  );
};
