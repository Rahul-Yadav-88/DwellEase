import React, { useEffect, useRef } from 'react';

import Photo1 from '../../assets/images/Photos1.jpg';
import Photo2 from '../../assets/images/Photos2.jpg';
import Photo3 from '../../assets/images/Photos3.jpg';
import Photo4 from '../../assets/images/Photos4.jpg';
import Photo5 from '../../assets/images/Photos5.jpg';
import Photo6 from '../../assets/images/Photos6.jpg';
import Photo7 from '../../assets/images/Photos7.jpg';
import Photo8 from '../../assets/images/Photos8.jpg';

const images = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
];

const WaterfallGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            entry.target.classList.add('inbound');
          } else {
            entry.target.classList.remove('inbound');
          }
        });
      },
      { threshold: [0, 1] }
    );

    const itemEls = galleryRef.current.querySelectorAll('.item');
    itemEls.forEach((item) => observer.observe(item));

    return () => {
      itemEls.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-4">
          Waterfall Gallery
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the collection of stunning images displayed in a dynamic waterfall layout.
        </p>
        <div className="mt-6 mx-auto h-1 w-16 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
      </div>

      {/* Gallery Section */}
      <div
        ref={galleryRef}
        className="waterfall max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`item overflow-hidden transform -rotate-6 saturate-0 contrast-200 brightness-20 transition-all duration-200 border-4 border-transparent hover:rotate-0 hover:filter-none hover:border-b hover:border-white ${
              index % 3 === 0
                ? 'h-[30vh] sm:h-[40vh]'
                : index % 3 === 1
                ? 'h-[40vh] sm:h-[50vh]'
                : 'h-[50vh] sm:h-[60vh]'
            }`}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transform rotate-12 transition-all duration-300 hover:rotate-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterfallGallery;
