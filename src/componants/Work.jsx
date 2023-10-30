import React from 'react';
// import { Link } from "react-router-dom";

const cards = [
  {
    header: 'OpenAI . MERN . AWS . CSS',
    subText: 'Presently is a an app that takes the hassle out of finding the perfect birthday gift and never lets you forget an important date. With its sophisticated AI algorithms, Presently creates a personalized gift suggestion list based on the recipient\'s interests, preferences, and more',
    img: 'https://i.imgur.com/4NhS1B4.jpg',
    demo: "https://ga-oct-hackathon-team-3.github.io/" ,
    code: "https://github.com/GA-Oct-hackathon-team-3",

  },
  {
    header: 'React . Express.js . JavaScript . MongoDB . Mongoose',
    subText: 'MyGoals is an app designed to help users keep organize, track and achive intention driven goals. This app takes into account elements of living with intention to create a more balanced, meaningful and purpose-driven life.',
    img: 'https://i.imgur.com/jNllYnl.jpg',
    demo: 'https://mygoalslog.netlify.app/',
    code: 'https://github.com/jpineda48/myGoalsApp' ,
  },
  {
    header: 'Python . Django . JavaScript . Materialize . AWS',
    subText: 'With Birthday Blaster, set up automated email reminders at personalized intervals to ensure you don’t forget anymore birthdays! You can also add important information and details about each special person.',
    img: 'https://i.imgur.com/HQkfKMj.jpg',
    demo: 'https://mygoalslog.netlify.app/',
    code: 'https://github.com/DaceyForward/Pod1-Project-3' ,
  },
  {
    header: 'JavaScript . HTML . CSS',
    subText: 'This game of concentration is created to test user focus as well as allow the user to gain new knowledge and information along the way',
    img: 'https://i.imgur.com/5Ecl1C9.jpg',
    demo: 'https://github.com/jpineda48/Concentration-Game',
    code: 'https://github.com/jpineda48/Concentration-Game',
  },
];

const Work = () => {
  return (
  
      <div name='work' className="bg- p-6 m-20 bg-[#fbf7f5]">
        <p className=' text-center med:text-center text-5xl font-bold'> WORK</p>
        <br/>
        <div className="max-w-4xl  mx-auto">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
            {cards.map((card, index) => (
              <div key={index} className="relative bg-white border border-black rounded-lg overflow-hidden shadow-md group">
                <img
                  src={card.img}
                  alt={`Card ${index + 1}`}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-semibold m-auto p-4">{card.header}</h2>
                  <p className="text-md p-4">{card.subText}</p>
                  <div className='flex gap-5 '>
                    <button className='bg-white text-black p-3 rounded-md mb-3'>
                      <a href={card.demo}>Demo</a>
                      </button>
                    <button className='bg-white text-black p-3 rounded-md mb-3'> 
                    <a href={card.code}> Code</a>
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Work;





