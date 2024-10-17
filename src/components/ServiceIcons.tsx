import React from 'react';
import servicesData from '../utils/servicesData'; // Import servicesData

const ServiceIcons: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8 mt-10">
            {servicesData.map((service, index) => (
                <a
                    key={index}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={service.title}
                    className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
                >
                    {/* Render the icon as JSX */}
                    <div className="text-5xl mb-4 text-blue-500">
                        {service.icon} {/* Icon is a JSX element */}
                    </div>
                    <span className="text-xl font-semibold text-gray-800">{service.title}</span>
                </a>
            ))}
        </div>
    );
};

export default ServiceIcons;
