import React from 'react';

const cards = [
  {
    header: 'Card 1',
    subText: 'This is the content for Card 1.',
  },
  {
    header: 'Card 2',
    subText: 'This is the content for Card 2.',
  },
  {
    header: 'Card 3',
    subText: 'This is the content for Card 3.',
  },
  {
    header: 'Card 4',
    subText: 'This is the content for Card 4.',
  },
];

const Work = () => {
  return (
  
      <div className="bg-gray-200 p-6 m-20">
        <p className=' text-center med:text-center text-5xl font-bold'> WORK</p>
        <div className="max-w-4xl  mx-auto">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
            {cards.map((card, index) => (
              <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-md group">
                <img
                  src={`https://via.placeholder.com/400x300?text=Card+${index + 1}`}
                  alt={`Card ${index + 1}`}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-semibold">{card.header}</h2>
                  <p className="text-lg">{card.subText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Work;





