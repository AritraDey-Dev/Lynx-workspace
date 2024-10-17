"use client";
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon

const Popup: React.FC = () => {
    const [visible, setVisible] = useState(true);

    const closePopup = () => setVisible(false);

    useEffect(() => {
        // You can add any logic here for side effects if necessary
    }, []);

    return (
        visible && (
            <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-900 bg-opacity-70 z-50 transition-opacity duration-300">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-300 scale-100 hover:scale-105">
                    {/* Gradient Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="text-xl font-bold">Live Site Notification</h3>
                        {/* Close button */}
                        <button onClick={closePopup} className="text-white hover:text-gray-200">
                            <AiOutlineClose className="h-6 w-6" />
                        </button>
                    </div>
                    <p className="mt-2 text-gray-700">
                        Check out this live site related to Gym Registration!
                    </p>
                    <a
                        href="https://gymregistration.com"
                        className="relative inline-block px-6 py-2 mt-4 text-white font-semibold text-center transition-all duration-300 ease-in-out border-2 border-transparent rounded-lg overflow-hidden group"
                    >
                        <span className="absolute inset-0 w-full h-full transition-transform duration-500 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-110 group-hover:scale-x-100" />
                        <span className="relative z-10">Gym Registration</span>
                    </a>
                </div>
            </div>
        )
    );
};

export default Popup;

