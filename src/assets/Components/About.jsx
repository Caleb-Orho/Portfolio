import React, { useState, useEffect, useRef } from 'react';

function About({ }) {

    return (
        <div className="h-screen bg-gradient-to-r from-black to-blue-500 flex flex-col items-center md:justify-center">
            <p className='mt-5 md:mt-0 text-5xl font-bold text-white'>
                About
            </p>
            <p className='w-9/12 text-lg font-light text-center text-white'>
                I'm Caleb, about to graduate from Algonquin College in Ottawa, Canada, with a degree in computer science.
                My passion lies in programming, particularly with a focus on C language and Java. I've accumulated a substantial
                portfolio of projects using these languages, showcasing my dedication and skills in the field.</p>
        </div >
    );
}


export default About;