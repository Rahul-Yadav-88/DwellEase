import React from 'react';

const PropertyDetail = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
    <span className="text-gray-600">{label}</span>
    <span className="font-semibold text-gray-800">{value}</span>
  </div>
);

const PropertyLayout = () => {
  const propertyDetails = [
    { label: 'Total Flat Space', value: '185 m²' },
    { label: 'Floor number', value: '26th' },
    { label: 'Number of rooms', value: '4' },
    { label: 'Parking Available', value: 'Yes' },
    { label: 'Payment Process', value: 'Bank' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-2/3 relative">
            <img
              src="https://images.unsplash.com/photo-1483097365279-e8acd3bf9f18?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property Interior"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Featured
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/3 p-6   lg:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Luxury Apartment</h2>
              <div className="space-y-2 mb-6">
                {propertyDetails.map((detail, index) => (
                  <PropertyDetail key={index} label={detail.label} value={detail.value} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Extra Info About Property</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLayout;