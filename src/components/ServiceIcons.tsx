import React from 'react';
import servicesData from '../utils/servicesData';

const ServiceIcons: React.FC = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">

            {servicesData.map((service) => (
                <a
                    key={service.title} // Use service title as the key, assuming it's unique
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={service.title}
                    className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
                >
                    <div className="text-5xl mb-4 text-blue-500">
                        {service.icon}
                    </div>
                    <span className="text-xl font-semibold text-gray-800">{service.title}</span>
                </a>
            ))}
        </div>
    );
};

export default ServiceIcons;
