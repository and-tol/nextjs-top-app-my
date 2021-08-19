import cn from 'classnames';
import { FooterProps } from './Footer.config';
import styles from './Footer.module.css';
import {format} from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <span>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </span>
      <a href='#' target='_blank'>
        Пользовательское соглашение
      </a>
      <a href='#' target='_blank'>
        Политика конфиденциальности
      </a>
    </footer>
  );
};
