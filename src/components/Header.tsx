import React from 'react';
import { TextGenerateEffectDemo } from './text-generate';
const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg p-6 rounded-lg text-white">
            <h1 className="text-4xl text-center font-bold">Welcome to Lynx Workspace</h1>
            {/* <p className="mt-2 text-lg"><TextGenerateEffectDemo/></p> */}
        </header>
    );
};

export default Header;
