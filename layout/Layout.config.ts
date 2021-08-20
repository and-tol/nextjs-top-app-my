import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  // children: ReactElement | ReactElement[];
  children: ReactNode
  // children?: JSX.Element | JSX.Element[];
}
