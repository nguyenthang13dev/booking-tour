// components/Tour/TourSection.tsx
import React from 'react';
import TourSection from './TourSection';
import HomeSlider from '@/components/Main/HomeSectionBanner';


const TourPage: React.FC = () => {
  return (
    <div>

<HomeSlider />

    <TourSection />
  </div>
  );
};

export default TourPage;