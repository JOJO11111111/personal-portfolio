import React from 'react';
import Lottie from 'lottie-react'; // Import Lottie as the default export
import catAnimation from '/home/tiffanybao/tiffany-react/personal-portfolio/src/assets/Animation - 1729199987120.json'; // Ensure the path is correct
import dogAnimation from '/home/tiffanybao/tiffany-react/personal-portfolio/src/assets/LET_ME_DO_IT_FOR_YOU.json'

const MemeCat = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
    <Lottie animationData={catAnimation} style={{ width: 300, height: 300 }} loop />
  </div>
);


// const LongNoseDog = () => (
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
//     <Lottie animationData={dogAnimation} style={{ width: 300, height: 300 }} loop />
//     {/* <p style={{ fontSize: '1.5rem', marginTop: '5px' }}>Let me do it for you...</p> */}
//   </div>
// );

const LongNoseDog = () => (
  <div style={{ float: 'right', margin: '10px', width: 100, height: 100 }}>
    <Lottie animationData={dogAnimation} style={{ width: '100%', height: '100%' }} loop />
  </div>
);


export { MemeCat, LongNoseDog };
// export { MemeCat };
