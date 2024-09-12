import React from 'react';

import Photo1 from '../../assets/images/Photos1.jpg';
import Photo2 from '../../assets/images/Photos2.jpg';
import Photo3 from '../../assets/images/Photos3.jpg';
import Photo4 from '../../assets/images/Photos4.jpg';
import Photo5 from '../../assets/images/Photos5.jpg';
import Photo6 from '../../assets/images/Photos6.jpg';
import Photo7 from '../../assets/images/Photos7.jpg';
import Photo8 from '../../assets/images/Photos8.jpg';
import Photo9 from '../../assets/images/Photos9.jpg';
import Photo10 from '../../assets/images/Photos10.jpg';

const Marquee = () => {
    const images = [
        Photo1,
        Photo2,
        Photo3,
        Photo4,
        Photo5,
        Photo6,
        Photo7,
        Photo8,
        Photo9,
        Photo10,
    ];

    return (
        <div className="overflow-x-hidden">
            <div className="marquee flex space-x-6 p-12">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Marquee image ${index + 1}`}
                        className="h-48 w-auto object-cover rounded-lg shadow-lg"
                    />
                ))}
            </div>
        </div>
    );
};

export default Marquee;
