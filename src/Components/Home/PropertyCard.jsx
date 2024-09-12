import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden w-full sm:w-72 md:w-80 shadow-lg transition-transform duration-300 ease-in-out hover:transform hover:translate-y-2">
  <div className="relative h-40 sm:h-48 md:h-52">
    <img
      src={property.imageUrl}
      alt={property.type}
      className="w-full h-full object-cover"
    />
    <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-sm">
      {property.price}
    </div>
  </div>
  <div className="p-3 sm:p-4 md:p-5">
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
      {property.address}
    </h2>
    <p className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded inline-block text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
      {property.type}
    </p>
    <div className="grid grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5">
      <div><strong>Bedrooms:</strong> {property.bedrooms}</div>
      <div><strong>Bathrooms:</strong> {property.bathrooms}</div>
      <div><strong>Area:</strong> {property.area}</div>
      <div><strong>Floor:</strong> {property.floor}</div>
      <div><strong>Parking:</strong> {property.parking}</div>
    </div>
    <button className="bg-blue-500 text-white w-full py-2 sm:py-3 rounded-md text-sm sm:text-lg transition-colors duration-300 hover:bg-blue-700">
      Schedule a Visit
    </button>
  </div>
</div>

  );
};

export default PropertyCard;
