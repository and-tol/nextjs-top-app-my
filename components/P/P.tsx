import cn from 'classnames';
import { PProps } from './P.config';
import styles from './P.module.css';

export const P = ({
  children,
  size = 'm',
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === 's',
        [styles.middle]: size === 'm',
        [styles.large]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
