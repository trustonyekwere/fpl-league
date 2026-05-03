declare namespace JSX {
  interface IntrinsicElements {
    "lord-icon": {
      src?: string;
      trigger?: string;
      colors?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
      [key: string]: any;
    };
  }
}
