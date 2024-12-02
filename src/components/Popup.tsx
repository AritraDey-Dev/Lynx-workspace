"use client";
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Popup: React.FC = () => {
    const [visible, setVisible] = useState(true);

    const closePopup = () => setVisible(false);

    return (
        visible && (
            <div 
                className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm z-50 transition-opacity duration-300"
                aria-live="assertive"
            >
                <div className="bg-white p-6 rounded-lg shadow-lg w-96 sm:w-80 md:w-[36rem] md:p-8 lg:w-[40rem] transform transition-transform duration-300 scale-100 hover:scale-105">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="text-xl md:text-2xl font-bold">Gym Registration is Live</h3>
                        <button 
                            onClick={closePopup} 
                            className="text-white hover:text-gray-200"
                            aria-label="Close notification"
                        >
                            <AiOutlineClose className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="m-4 flex flex-col items-center">
                        <img
                            src="/images/Untitled.jpeg"
                            alt="Popup Image"
                            className="w-full rounded-lg"
                        />
                        <p className="mt-4 text-gray-700 text-center text-sm md:text-base">
                            Check out this live site related to Gym Registration!
                        </p>
                        <a
                            href="https://gymregistration.com"
                            className="relative inline-block px-6 py-2 mt-4 text-white font-semibold text-center transition-all duration-300 ease-in-out border-2 border-transparent rounded-lg overflow-hidden group"
                        >
                            <span className="absolute inset-0 w-full h-full transition-transform duration-500 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-110 group-hover:scale-x-100"></span>
                            <span className="relative z-10">Gym Registration</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    );
};

export default Popup;
