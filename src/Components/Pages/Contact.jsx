import React from "react";
import Contact1 from "../../assets/images/Contact1.jpg";
import Marquee from "./Marquee";

const Contact = () => {
  return (
<>
<div className="relative w-full h-72 bg-gray-900">
      <img
        src={Contact1}
        alt="Property background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
        <p className="text-sm uppercase mb-2">Home / Contact</p>
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>
      <div>
      </div>
    </div>
    <Marquee />
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          
          {/* Contact Information Section */}
          <div className="lg:w-5/12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Get In Touch With Our Agents
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              When you really need to download free CSS templates, please remember our website TemplateMo.
              Also, tell your friends about our website. Thank you for visiting. If you need more information,
              please contact us.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-md">
                <div className="bg-green-500 p-3 rounded-full">
                  <i className="text-white text-xl">📞</i>
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">010-020-0340</p>
                  <p className="text-gray-500">Phone Number</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-md">
                <div className="bg-green-500 p-3 rounded-full">
                  <i className="text-white text-xl">✉️</i>
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">info@villa.co</p>
                  <p className="text-gray-500">Business Email</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-6/12 bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-50 shadow-sm"
                  placeholder="Your Name..."
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-50 shadow-sm"
                  placeholder="Your E-mail..."
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-50 shadow-sm"
                  placeholder="Subject..."
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-50 shadow-sm"
                  rows="5"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
            <div className="container mx-auto p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                   
                    <div className="map-container relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.968923539965!2d-80.12267332488886!3d25.94047097821064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abdc491be8c3%3A0xb5d9e2d9d8e3cf6c!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2sin!4v1692866324449!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

</>
  );
};

export default Contact;