/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Booking from './components/Booking';
import InfiniteCarousel from './components/InfiniteCarousel';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <div className="bg-obsidian min-h-screen selection:bg-gold/30 selection:text-pure-white">
      <CustomCursor />
      <Preloader onComplete={() => setIsLoading(false)} />
      
      <ParticlesBackground />
      
      {!isLoading && (
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Reviews />
          <Location />
          <Booking />
          <InfiniteCarousel />
          <Footer />
        </main>
      )}
    </div>
  );
}

