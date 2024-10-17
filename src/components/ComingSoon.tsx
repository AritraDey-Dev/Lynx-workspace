import React from 'react';
import servicesData from '../utils/servicesData'; // Import servicesData

const ComingSoon: React.FC = () => {
    return (
        <section className="mt-6">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 via-red-500 to-yellow-500 mb-4 animate-slide-up">
                Coming Soon...
            </h2>
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
                        <div className="text-4xl mb-4 text-blue-500">
                            {service.icon} {/* Reduced icon size */}
                        </div>
                        <span className="text-xl font-semibold text-gray-800">{service.title}</span>
                        <p className="text-center text-gray-600 mt-2">{service.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ComingSoon;

