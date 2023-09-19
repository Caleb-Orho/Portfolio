import React from 'react';
import { Picross, Bounce, Audio, Video, Store, Bank, Cipher, Exam, PassWord } from "../utils/Project"


function Project({ }) {
  return (
    <div className='min-h-screen flex-grow bg-gradient-to-r from-blue-500 to-black text-white flex flex-col items-center md:justify-center'>
      {/* //  h-96 */}
      <div className='mt-5 grid grid-row-4 sm:grid-cols-4 gap-4 mr-5 ml-5 mb-5'>
        <Picross />
        <Bounce />
        <Store />
        <Bank />

        <Audio />
        <Video />

        <Cipher />
        <Exam />
        <PassWord />
      </div >
    </div >
  );
}


export default Project;