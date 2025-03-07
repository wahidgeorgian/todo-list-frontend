
import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-cover bg-center h-screen text-white" style={{ backgroundColor:"red" }}>
            <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg mb-8">We are glad to have you here. Explore and enjoy!</p>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">Get Started</button>
            </div>
        </section>
    );
};

export default HeroSection;

