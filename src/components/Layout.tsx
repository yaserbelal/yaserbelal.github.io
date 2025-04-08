
import { FC, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarsBackground from './StarsBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <StarsBackground />
      <Navbar />
      <main className="flex-grow pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
