import React from 'react';
import servicesData from '../utils/servicesData'; // Import servicesData

const ComingSoon: React.FC = () => {
    return (
        <section className="mt-6">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 via-red-500 to-yellow-500 mb-4 animate-slide-up">
                Coming Soon...
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {servicesData.map((service, index) => (
                    <a
                        key={index}
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={service.title}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
                    >
                        <div className="text-5xl mb-4 text-blue-500 dark:text-blue-300">
                            {service.icon}
                        </div>
                        <span className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center justify-center w-full">
                            {service.title}
                        </span>
                        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                            {service.description}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ComingSoon;
