import React from 'react';

const Service = () => {
  // Define service data array
  const services = [
    {
      title: 'Service 1',
      description: 'Description for Service 1',
      imageSrc: 'https://example.com/service1.jpg',
    },
    {
      title: 'Service 2',
      description: 'Description for Service 2',
      imageSrc: 'https://example.com/service2.jpg',
    },
    // Add more service objects as needed
  ];

  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Example
      </h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          {services.map((service, index) => (
            <div className="inline-block px-3" key={index}>
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={service.imageSrc} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
