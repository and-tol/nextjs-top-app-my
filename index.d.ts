// index.d.ts

declare module '*.svg' {
  // const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const ReactComponent: React.FC<React.SVGAttributes<SVGAElement>>;
  export default ReactComponent;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module 'classnames';
