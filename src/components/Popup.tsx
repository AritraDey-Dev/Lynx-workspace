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
                <div className="bg-white p-4 rounded-lg shadow-lg w-[85%] sm:w-3/4 md:w-1/2 lg:w-2/5 max-w-[32rem] transform transition-transform duration-300 scale-100 hover:scale-102">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <h3 className="text-md sm:text-lg md:text-xl font-bold">Gym Registration is Live</h3>
                        <button
                            onClick={closePopup}
                            className="text-white hover:text-gray-200"
                            aria-label="Close notification"
                        >
                            <AiOutlineClose className="h-5 w-5" />
                        </button>
                    </div>
                    {/* Body */}
                    <div className="m-3 flex flex-col items-center">
                        <img
                            src="/images/Untitled.jpeg"
                            alt="Popup Image"
                            className="w-full rounded-lg"
                        />
                        <p className="mt-3 text-gray-700 text-center text-xs sm:text-sm md:text-base">
                            Check out this live site related to Gym Registration!
                        </p>
                        <a
                            href="https://gymregistration.com"
                            className="relative inline-block px-4 py-2 mt-3 text-white font-semibold text-center transition-all duration-300 ease-in-out border-2 border-transparent rounded-lg overflow-hidden group"
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
