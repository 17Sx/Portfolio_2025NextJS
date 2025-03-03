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
    <main>
      <Header />
      
      <div className='not-found-container'>
        <Scene404 />
        
        <div className='not-found'>
            <h1>404 |</h1>
            <h2>Not Found!</h2>
        </div>

        <div className='not-found-text'>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Go back to the<Link className='a' href="/"> HomePage</Link>!</p>
        </div>  
      </div>
      
      <Footer />
    </main>
    </>
  );
};

export default NotFound;
