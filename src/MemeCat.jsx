import React from 'react';
import Lottie from 'lottie-react'; // Import Lottie as the default export
import catAnimation from './assets/Animation - 1729199987120.json'; // Updated to use relative path
import dogAnimation from './assets/LET_ME_DO_IT_FOR_YOU.json'; // Updated to use relative path

const MemeCat = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
    <Lottie animationData={catAnimation} style={{ width: 300, height: 300 }} loop />
  </div>
);

const LongNoseDog = () => (
  <div style={{ float: 'right', margin: '10px', width: 100, height: 100 }}>
    <Lottie animationData={dogAnimation} style={{ width: '100%', height: '100%' }} loop />
  </div>
);

export { MemeCat, LongNoseDog };
