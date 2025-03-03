"use client";
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Scene404 from '@/components/404scene';

const NotFound = () => {
  return (
    <>
<body className='dark'>
        <main>
      <Header />
      <div style={{ position: 'absolute', bottom: 200, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Scene404 />
      </div>
      <div className='not-found-container'>
        <div className='not-found-text'>
            <p className='home404'><Link className='a' href="/"> HomePage</Link>!</p>
        </div>  
      </div>
      <Footer />
    </main>
    </body>

    </>
  );
};

export default NotFound;