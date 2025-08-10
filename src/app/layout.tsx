// src/app/layout.tsx
'use client';

import '../styles/globals.css'; // ✅ Corrected path
import ThreeBG from '../components/ThreeBG'; // ✅ Also make sure this path is valid
import { initSmoothScroll } from '@/utils/lenis';
import { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <html lang="en">
      <body>
        <ThreeBG /> {/* This renders your background */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
