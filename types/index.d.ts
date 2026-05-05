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

// Minimal FPL API types used in the app
interface FplEvent {
  id: number;
  name: string;
  deadline_time: string;
  is_current?: boolean;
  is_next?: boolean;
}

interface FplElement {
  id: number;
  web_name: string;
  total_points: number;
  now_cost?: number;
  team: number;
}

interface FplTeam {
  id: number;
  name: string;
  short_name: string;
}

interface FplBootstrap {
  events: FplEvent[];
  elements: FplElement[];
  teams: FplTeam[];
}
