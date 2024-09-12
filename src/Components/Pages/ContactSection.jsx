import React from 'react';

const ContactSection = () => {
  return (
    <div className="h-screen w-full bg-gray-100 p-8 flex flex-col lg:flex-row justify-center items-center gap-8">
      {/* Map Section */}
      <div className="flex-1 w-full h-74 lg:h-3/4 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.907535800617!2d-80.13021158508786!3d25.94986858355871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acb7307e7759%3A0x80c4c7a82c20ae5!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2sin!4v1692738748232!5m2!1sen!2sin"
          className="w-full h-full"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
      {/* Contact Form */}
      <div className="flex-1 pb-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Get In Touch With Our Agents
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name..."
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your E-mail..."
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Subject..."
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message..."
            className="w-full p-3 border border-gray-300 rounded-lg h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
