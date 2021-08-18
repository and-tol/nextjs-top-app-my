// index.d.ts

declare module '*.svg' {
  // const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const ReactComponent: React.FC<React.SVGAttributes<SVGAElement>>;
  export default ReactComponent;
}
