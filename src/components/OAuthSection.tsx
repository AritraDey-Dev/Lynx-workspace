"use client";

import React from 'react';
import { CardContainer, CardBody, CardItem } from './ui/3d-card'; 
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

const OAuthSection: React.FC = () => {
    return (
        <section className="mt-4 flex  max-w-33rem items-center justify-center px-4 sm:px-6 lg:px-8"> 
            <CardContainer className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs sm:max-w-sm transition-transform duration-300 hover:scale-105">
                <CardBody>
                    <div className="mb-3 flex justify-center">
                        <Image
                            src="/images/Untitled.jpeg"
                            alt="OAuth Illustration"
                            width={400} 
                            height={150} 
                            className="object-cover rounded-md" 
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-center text-blue-800 mt-3 mb-3"> 
                        Lynx OAuth Registration
                    </h2>
                    <p className="text-center text-sm text-blue-600 mb-3"> 
                        Register your app to integrate seamlessly with Lynx's OAuth services.
                    </p>
                    <CardItem>
                        <button 
                            type="button" 
                            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-md text-xs px-4 py-2 ml-14 flex items-center justify-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                        >
                            <svg 
                                className="w-3 h-3 me-2" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor" 
                                viewBox="0 0 20 17"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" 
                                    clipRule="evenodd" 
                                />
                            </svg>
                            Sign in with Lynx
                            <AiOutlineRight className="ml-2 text-xs" />
                        </button>
                    </CardItem>
                </CardBody>
            </CardContainer>
        </section>
    );
};

export default OAuthSection;
