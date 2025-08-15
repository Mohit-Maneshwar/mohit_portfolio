'use client';

import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { initSmoothScroll } from '@/utils/lenis';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import AnimatedCursor from 'react-animated-cursor';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Custom Cursor */}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color="0, 255, 179"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            'a',
            'button',
            '.link',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.cursor-hover'
          ]}
        />

        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
