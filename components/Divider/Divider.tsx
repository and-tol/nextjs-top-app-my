import cn from 'classnames';
import { DividerProps } from './Divider.config';
import styles from './Divider.module.css';

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={cn(className, styles.hr)} {...props}></hr>;
};
