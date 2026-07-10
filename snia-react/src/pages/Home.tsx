import React from 'react';
import { Hero } from '../components/Hero';
import { VideoShowcase } from '../components/VideoShowcase';
import { About } from '../components/About';
import { WhatWeDo } from '../components/WhatWeDo';
import { Stats } from '../components/Stats';
import { Highlights } from '../components/Highlights';
import { Categories } from '../components/Categories';
import { Testimonials } from '../components/Testimonials';
import { Partners } from '../components/Partners';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <VideoShowcase />
      <About />
      <Stats />
      <Highlights />
      <WhatWeDo />
      <Categories />
      <Testimonials />
      <Partners />
    </div>
  );
};
