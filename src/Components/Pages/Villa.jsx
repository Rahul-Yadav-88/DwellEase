
import React from "react";
import PropertyList from "../Home/PropertyList"




const Villa = () => {
  return (
    <>
    <div className="relative w-full h-72 bg-gray-900">
      <img  src='images/property-03.jpg'
        alt="Property background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
        <p className="text-sm uppercase mb-2">Home / Property</p>
        <h1 className="text-4xl font-bold">Property</h1>
      </div>
      <div>
      </div>
    </div>


    <PropertyList/>

    </>
  )
}

export default Villa