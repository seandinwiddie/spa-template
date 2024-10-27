import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <div>
      <p>Welcome to the app!</p>
      {children}
    </div>
  );
};

export default Layout;
