"use client";

import React from 'react';
import { CardContainer, CardBody, CardItem } from './ui/3d-card'; // Adjust the import path as necessary
import Image from 'next/image'; // Import the Image component from Next.js
import { Button } from './ui/moving-border'; // Adjust the import path as necessary
import { AiOutlineRight } from 'react-icons/ai'; // Import an arrow icon from react-icons

const OAuthSection: React.FC = () => {
    return (
        <section className="mt-6 flex items-center justify-center">
            <CardContainer className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg transition-transform duration-300 hover:scale-105">
                <CardBody>
                    {/* Image Section */}
                    <div className="mb-4 flex justify-center">
                        <Image
                            src="/images/Untitled.jpeg" // Replace with the correct image path
                            alt="OAuth Illustration"
                            width={300} // Adjust width as needed
                            height={200} // Adjust height as needed
                            className="object-cover rounded-lg" // Ensures the image covers the area and has rounded corners
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
                        Lynx OAuth and Client App Registration
                    </h2>
                    <p className="text-center text-blue-600 mb-4">
                        Register your application to use our OAuth services. This allows you to integrate with Lynx and utilize its powerful features seamlessly.
                    </p>
                    <CardItem>

                        <button type="button" className="text-white justify-end bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Twitter
                            <AiOutlineRight className="ml-2" /> {/* Arrow icon */}
                        </button>
                    </CardItem>
                </CardBody>
            </CardContainer>
        </section>
    );
};

export default OAuthSection;
