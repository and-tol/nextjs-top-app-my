import cn from 'classnames';
import { FooterProps } from './Footer.config';
import styles from './Footer.module.css';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
