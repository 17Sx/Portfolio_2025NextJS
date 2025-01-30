"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const DynamicScene = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
          <Scene text=" "/>
    </Suspense>
  );
};

export default DynamicScene;
