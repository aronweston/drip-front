import React from 'react';

const CoffeeCard = ({ coffee }) => {
  return (
    <div class='p-10'>
      <div class='max-w-sm rounded overflow-hidden shadow-lg'>
        <div>
          <img
            className='w-full'
            src={coffee.image ? coffee.image : ''}
            alt={`${coffee.title} by ${coffee.roaster.name}`}
          />
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>{coffee.title}</div>
            <p class='text-gray-700 text-base'>
              {`${coffee.description.substring(0, 250)}...`}
            </p>
            <span class='text-gray-700 text-base'>
              ${coffee.price} • {coffee.grams}g • {coffee.roaster.name}
            </span>
          </div>
          <div class='px-6 pt-4 pb-2'>
            {coffee.tastesLike.map((taste) => (
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #{taste}
              </span>
            ))}
          </div>
          <img
            src={coffee.roaster.logo ? coffee.roaster.logo : ''}
            alt={`The logo for ${coffee.roaster.name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
