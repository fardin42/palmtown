'use client';

import { colors } from '@/styles/colors';


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow h-full">{children}</main>

      <footer 
        className="text-center p-8 text-white"
        style={{ backgroundColor: colors.primaryBrown }}
      >
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Palmtown. All Rights Reserved.
        </p>
        <p className="text-sm mb-2">
          A project by Mahalaxmi Associates, Surana Developers, & Fortune
          Constrotech LLP.
        </p>
        <p className="text-xs">
          Disclaimer: This website is for informational purposes only. The company
          reserves the right to change plans, specifications, and features without
          prior notice. Images are indicative.
        </p>
      </footer>
    </div>
  );
}