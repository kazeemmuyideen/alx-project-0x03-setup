// For pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// For Button component
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
    buttonBackgroundColor: string;
    buttonSize: "";
}

// For Layout component (optional structure)
export interface LayoutProps {
  children: React.ReactNode;
}
