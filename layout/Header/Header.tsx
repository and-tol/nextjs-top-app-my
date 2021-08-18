import cn from 'classnames';
import { HeaderProps } from './Header.config';
import styles from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
