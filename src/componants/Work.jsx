import React from 'react'
import goals from '../assets/Goals.jpg'
import birthday from '../assets/birthday.jpg'
import memory from '../assets/memory.jpg'


// const Work = () => {
//   return (
//     <div name='work' className='w-full md:h-screen text-black bg-[#fbf7f5]'>
//        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8'>
//             <p className='text-4xl font-bold inline  text-black'>Featured Projects</p>
//         </div>


//         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


//             <div style={{backgroundImage:`url(${goals})`,
//                           backgroundSize: 'cover'
        
//             }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'>
                
//                 <div className='opacity-0 group-hover:opacity-100'>
//                     <span className='text-3xl font-bold text-black px-4 py-3 m-2 tracking-wider'>
//                         MyGoals
//                     </span>
                   
//                     <div className='pt-8 text-center'>
//                         <a href="https://mygoalslog.netlify.app/">
//                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white  font-bold text-lg'>Demo</button>
//                         </a>
//                         <a href="/">
//                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>Code</button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div style={{backgroundImage: `url(${birthday})`, backgroundSize: 'cover'}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'>
                
//                 <div className='opacity-0 group-hover:opacity-100'>
//                     <span className='text-3xl font-bold text-white tracking-wider'>
//                         Birthday Blaster
//                     </span>
                    
                    
//                     <div className='pt-8 text-center'>
//                         <a href="https://birthdayblaster.onrender.com/">
//                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-red-400 text-white font-bold text-lg'>Demo</button>
//                         </a>
//                         <a href="https://birthdayblaster.onrender.com/">
//                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-red-400 text-white font-bold text-lg'>Code</button>
//                         </a>
                       
//                     </div>
                   
//                 </div>
                
//             </div>
//             <div style={{backgroundImage: `url(${memory})`, backgroundSize: 'cover'}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'>
                
//                 <div className='opacity-0 group-hover:opacity-100'>
//                     <span className='text-3xl font-bold text-white tracking-wider'>
//                         CONCENTRATION
//                     </span>
//                     <div className='pt-8 text-center'>
//                         <a href="/">
//                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
//                         </a>
//                         <a href="https://github.com/jpineda48/Concentration-Game">
//                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
         
        
//         </div>
//        </div>
//     </div>
//   )
// }

// export default Work

import { useState } from 'react';

const Work = () => {
  const images = [
    { id: 1, src: 'https://i.imgur.com/tyKoP9d.jpg', text: 'Image 1 Text' },
    { id: 2, src: 'https://i.imgur.com/tyKoP9d.jpg', text: 'Image 2 Text' },
    { id: 3, src: 'https://i.imgur.com/tyKoP9d.jpg', text: 'Image 3 Text' },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto relative">
      <div className="overflow-hidden w-full rounded-lg">
        <div
          className="flex transition-transform duration-300 transform"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="w-full flex-shrink-0 relative h-96"
            >
              <img
                src={image.src}
                alt={image.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                {image.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2">
        <button
          onClick={prevImage}
          className="bg-gray-600 text-white p-2 rounded-full mr-2"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="bg-gray-600 text-white p-2 rounded-full "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Work;



