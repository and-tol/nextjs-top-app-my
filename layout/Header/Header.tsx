import cn from 'classnames';
import { HeaderProps } from './Header.config';

export const Header = ({className, ...props }: HeaderProps): JSX.Element => {
  return <div className={cn(className)} {...props}>Header</div>;
};
