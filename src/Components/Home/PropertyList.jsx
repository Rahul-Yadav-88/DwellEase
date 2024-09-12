import React from 'react';
import PropertyCard from './PropertyCard';

// Dummy JSON data
const properties = [
    {
        id: 1,
        imageUrl: 'images/property-01.jpg',
        price: '$2,264,000',
        address: '18 New Street Miami, OR 97219',
        type: 'Luxury Villa',
        bedrooms: 8,
        bathrooms: 8,
        area: '545 m²',
        floor: 3,
        parking: '6 spots',
    },
    {
        id: 2,
        imageUrl: 'images/property-02.jpg',
        price: '$1,500,000',
        address: '22 Ocean Drive Malibu, CA 90265',
        type: 'Beach House',
        bedrooms: 6,
        bathrooms: 5,
        area: '350 m²',
        floor: 2,
        parking: '4 spots',
    },
    {
        id: 3,
        imageUrl: 'images/property-03.jpg',
        price: '$3,800,000',
        address: '47 Park Avenue New York, NY 10016',
        type: 'Penthouse',
        bedrooms: 4,
        bathrooms: 4,
        area: '600 m²',
        floor: 10,
        parking: '2 spots',
    },
    {
        id: 4,
        imageUrl: 'images/property-04.jpg',
        price: '$980,000',
        address: '120 Maple Street Austin, TX 73301',
        type: 'Modern Home',
        bedrooms: 3,
        bathrooms: 2,
        area: '250 m²',
        floor: 1,
        parking: '1 spot',
    },
    {
        id: 5,
        imageUrl: 'images/property-05.jpg',
        price: '$4,200,000',
        address: '15 Sunset Boulevard Beverly Hills, CA 90210',
        type: 'Mansion',
        bedrooms: 9,
        bathrooms: 10,
        area: '1000 m²',
        floor: 2,
        parking: '10 spots',
    },
    {
        id: 6,
        imageUrl: 'images/property-06.jpg',
        price: '$750,000',
        address: '78 River Road Nashville, TN 37214',
        type: 'Cottage',
        bedrooms: 2,
        bathrooms: 2,
        area: '120 m²',
        floor: 1,
        parking: '1 spot',
    },
];

const PropertyList = () => {
    return (
        <>
            <div className='flex justify-center items-center h-full sm:h-auto md:h-full sm:p-5 md:p-10 lg:p-20 bg-gray-100'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </>

    );
};

export default PropertyList;
