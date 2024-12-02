import React from 'react';
import servicesData from '../utils/servicesData'; // Import servicesData

const ComingSoon: React.FC = () => {
    return (
        <section className="mt-6">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 via-red-500 to-yellow-500 mb-4 animate-slide-up">
                Coming Soon...
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                {servicesData.map((service, index) => (
                    <a
                        key={index}
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={service.title}
                        className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
                    >
                        <div className="text-4xl mb-4 text-blue-500 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                            {service.icon} {/* Consistent size */}
                        </div>
                        <span className="text-lg font-semibold text-gray-800 text-center">{service.title}</span>
                        <p className="text-center text-gray-600 mt-2">{service.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ComingSoon;
