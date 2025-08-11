// src/app/layout.tsx
'use client';

import Navbar from '@/components/Navbar';
import '../styles/globals.css'; // ✅ Corrected path
import { initSmoothScroll } from '@/utils/lenis';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
