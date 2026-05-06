'use client';

import React from 'react';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutProvider
        bodyClassName="lg:overflow-hidden"
        style={
          {
            '--header-height': '120px',
            '--navbar-height': '60px',
            '--header-height-sticky': '70px',
            '--header-height-mobile': '120px',
          } as React.CSSProperties
        }
      >
        <Wrapper>{children}</Wrapper>
      </LayoutProvider>
    </>
  );
}
