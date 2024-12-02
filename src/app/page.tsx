import React from 'react';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';
import OAuthSection from '../components/OAuthSection';
import ServiceIcons from '@/components/ServiceIcons';
import { Carousel } from '@/components/ui/apple-cards-carousel';
import projects, { Project } from '../utils/project';
import Popup from '@/components/Popup';
import Image from 'next/image';

const Home: React.FC = () => {
    const carouselItems = projects.map((project: Project) => (
        <div
            key={project.id}
            className="rounded-3xl bg-white p-4 shadow-md w-80 md:w-[384px] h-[350px] mx-auto"
        >
            <Image
                src={project.src}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-t-3xl"
                width={384}
                height={200} // Fixed height for the image
            />
            <h2 className="text-xl font-bold mt-2 text-blue-600">{project.title}</h2>
            <p className="text-gray-600">{project.category}</p>
            <p className="mt-4 text-blue-600 italic">Description: {project.description}</p>
        </div>
    ));




    return (
        <div className="container mx-auto p-6">
            <Header />
            <ServiceIcons />
            <Carousel items={carouselItems} />
            <ComingSoon />
            <OAuthSection />

            <div className="fixed  p-4 m-4">
                <Popup />
            </div>
        </div>
    );
};

export default Home;
