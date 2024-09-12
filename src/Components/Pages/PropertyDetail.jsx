import React from 'react'
import PropertyLayout from './PropertyLayout'
import Footer from '../footer/Footer'
import WaterfallGallery from '../Home/WaterfallGallery'

const PropertyDetail = () => {
  return (
    <div>
        <div className="relative w-full h-72 bg-gray-900">
      <img
        src='images/property-01.jpg'
        alt="Property background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
        <p className="text-sm uppercase mb-2">Home / Property Details</p>
        <h1 className="text-4xl font-bold">Property Details</h1>
      </div>
      <div>
      </div>
    </div>
    <PropertyLayout />
    <WaterfallGallery />
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Get the best villa agency HTML CSS Bootstrap Template for your company website.
        </h1>
        
        <p className="mb-4">
          TemplateMo provides you the <span className="text-blue-500">best free CSS templates</span> in the world. Please tell your friends about it. Thank you.
        </p>
        
        <p className="mb-6">
          Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
        </p>
        
        <p className="mb-8">
          When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Best useful links?</h2>
          
          <p className="mb-4">
            Dolor <span className="font-semibold">almesit amet</span>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <span className="text-pink-500">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">How does this work?</h3>
          
          <h3 className="text-lg font-semibold">Why is Villa the best?</h3>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default PropertyDetail