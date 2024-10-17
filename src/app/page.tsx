import React from 'react';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';
import OAuthSection from '../components/OAuthSection';
import ServiceIcons from '@/components/ServiceIcons';
import { Carousel } from '@/components/ui/apple-cards-carousel'; // Ensure this path is correct
import projects, { Project } from '../utils/project'; // Import the project data and Project type
import Popup from '@/components/Popup';
import Image from 'next/image'; // Import the Image component from Next.js

const Home: React.FC = () => {
    // Generate carousel items from project data
    const carouselItems = projects.map((project: Project) => (
        <div key={project.id} className="rounded-3xl bg-white p-4 shadow-md w-80 md:w-[384px]"> {/* Set item width */}
            <Image
                src={project.src}
                alt={project.title}
                className="w-full h-50 object-cover rounded-t-3xl"
                width={384} // Set an appropriate width
                height={300} // Set an appropriate height
            />
            <h2 className="text-xl font-bold mt-2 text-blue-600">{project.title}</h2> {/* Update title color here */}
            <p className="text-gray-600">{project.category}</p>
            <p className="mt-4 text-blue-600 italic">Description: {project.description}</p> {/* Emphasize the description */}
        </div>
    ));

    return (
        <div className="container mx-auto p-6">
            <Header />
            <ServiceIcons />
            <Carousel items={carouselItems} /> {/* Pass carouselItems as props */}
            <ComingSoon />
            <OAuthSection />
            {/* Position the popup in the bottom right corner */}
            <div className="fixed bottom-0 right-0 m-4">
                <Popup />
            </div>
        </div>
    );
};

export default Home;
