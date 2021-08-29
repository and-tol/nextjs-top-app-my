import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
}
