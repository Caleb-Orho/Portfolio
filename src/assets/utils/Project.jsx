import React from 'react';
import Picross1 from './Images/Picross/Picross1.png'
import Picross2 from './Images/Picross/Picross2.png'
import Picross3 from './Images/Picross/Picross3.png'
import Picross4 from './Images/Picross/Picross4.png'
import Bounceing from './Images/Bounce/Bounceing.mp4'
import Stores from './Images/Store/Store.png'
import Banks from './Images/Bank/Bank.png'
import Cipherr from './Images/Bank/Cipher.png'
import Exams from './Images/Bank/Exam.png'
import Passwords from './Images/Bank/Password.png'


import DownloadingMusic from './Images/AudioToMp3/DownloadingMusic.mp4'
import Quizzler1 from './Images/AudioToMp3/Quizzler1.png'

import VideoDownload from './Images/VideoDownloader/VideoDownload.mp4'
import YoutubeDownloadVideo from './Images/VideoDownloader/YoutubeDownloadVideo.png'

import tree from '../Components/tree.png'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Picross({ }) {
    return (
        <div className='flex flex-col'>
            <p className='text-center font-bold'>
                Java
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md'
                    itemId={1}
                    src={Picross1}
                    alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='h-60 rounded-md'
                    itemId={2}
                    src={Picross2}
                    alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='h-60 rounded-md'
                    itemId={3}
                    src={Picross3}
                    alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='h-60 rounded-md'
                    itemId={4}
                    src={Picross4}
                    alt='...'
                >
                </MDBCarouselItem>
            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold'>Picross Game</p>
                <p className='text-sm font-light text-center'>Created using Java Swing, implementing various
                    game features such as multiple levels, scoring, multiplayer and game logic.</p>
                <button className="rounded-md border-2 border-white w-40" onClick={() => window.open('https://github.com/Caleb-Orho/JavaBased/tree/main/Picross', '_blank')}>Source Code</button>
            </div>

        </div>
    );
}

function Bounce({ }) {
    return (
        <div className='flex flex-col h'>
            <p className='text-center font-bold'>
                Java
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={1}
                    src={tree}
                    alt='...'
                >
                    <video width="100%" height="100%" loop autoPlay muted >
                        <source src={Bounceing} type="video/mp4" />
                    </video>
                </MDBCarouselItem>
            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold truncate'>Bouncing Animation</p>
                <p className='text-sm font-light text-center '> An interactive DVD animation with realistic physics using Java Swing. </p>
                <button className="rounded-md border-2 border-white w-40" onClick={() => window.open('https://github.com/Caleb-Orho/JavaBased/tree/main/Bounce', '_blank')}>Source Code</button>
            </div>
        </div>
    );
}

function Audio({ }) {
    return (
        <div className='flex flex-col h'>
            <p className='text-center font-bold'>
                React | TailwindCSS | FramerMotion
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={1}
                    src={Quizzler1}
                    alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={2}
                    src={tree}
                    alt='...'
                >
                    <video width="100%" height="100%" loop autoPlay muted >
                        <source src={DownloadingMusic} type="video/mp4" />
                    </video>
                </MDBCarouselItem>
            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold truncate'>Video To Mp3</p>
                <p className='text-sm font-light text-center '> An online video-to-audio conversion tool using React and Python with Flask and moviepy library. </p>
            </div>
        </div>
    );
}

function Video({ }) {
    return (
        <div className='flex flex-col h'>
            <p className='text-center font-bold'>
                React | TailwindCSS | FramerMotion
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={1}
                    src={YoutubeDownloadVideo}
                    alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={2}
                    src={tree}
                    alt='...'
                >
                    <video width="100%" height="100%" loop autoPlay muted >
                        <source src={VideoDownload} type="video/mp4" />
                    </video>
                </MDBCarouselItem>
            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold truncate'>Youtube Video Downloader</p>
                <p className='text-sm font-light text-center '> An online video downloader React and Python with Flask and pytube library. </p>
            </div>
        </div>
    );
}

function Store({ }) {
    return (
        <div className='flex flex-col h'>
            <p className='text-center font-bold'>
                Java
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={1}
                    src={Stores}
                    alt='...'
                >
                </MDBCarouselItem>

            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold truncate'>Store System</p>
                <p className='text-sm font-light text-center '> Java-based store management system that leverages Comparable,
                    adheres to Object-Oriented Programming principles, and incorporates exception handling.  </p>
                <button className="rounded-md border-2 border-white w-40" onClick={() => window.open('https://github.com/Caleb-Orho/JavaBased/tree/main/storeManageSystem', '_blank')}>Source Code</button>
            </div>
        </div>
    );
}

function Bank({ }) {
    return (
        <div className='flex flex-col h'>
            <p className='text-center font-bold'>
                Java
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={1}
                    src={Banks}
                    alt='...'
                >
                </MDBCarouselItem>

            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold truncate'>Banking System</p>
                <p className='text-sm font-light text-center '> Java-based banking system that implements a real life banking system. it adheres to Object-Oriented Programming principles,
                    and incorporates exception handling.  </p>
                <button className="rounded-md border-2 border-white w-40" onClick={() => window.open('https://github.com/Caleb-Orho/JavaBased/tree/main/Banking%20System', '_blank')}>Source Code</button>
            </div>
        </div>
    );
}

function Cipher({ }) {
    return (
        <div className='flex flex-col h'>
            <p className='text-center font-bold'>
                C Language
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={1}
                    src={Cipherr}
                    alt='...'
                >
                </MDBCarouselItem>

            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold truncate'>Cipher</p>
                <p className='text-sm font-light text-center '> An encryption method using a substitution cipher that involves character
                    swaps to transform plaintext into encrypted text. This implementation utilizes C pointers and advanced coding algorithms.  </p>
                <button className="rounded-md border-2 border-white w-40" onClick={() => window.open('https://github.com/Caleb-Orho/CBased/blob/main/Cipher/Cipher.c', '_blank')}>Source Code</button>
            </div>
        </div>
    );
}

function Exam({ }) {
    return (
        <div className='flex flex-col h'>
            <p className='text-center font-bold'>
                C Language
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={1}
                    src={Exams}
                    alt='...'
                >
                </MDBCarouselItem>

            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold truncate'>Exam Scheduler</p>
                <p className='text-sm font-light text-center '> An exam scheduler that employs bitwise operators to manage exam time slots. </p>
                <button className="rounded-md border-2 border-white w-40" onClick={() => window.open('https://github.com/Caleb-Orho/CBased/tree/main/ExamScheduler', '_blank')}>Source Code</button>
            </div>
        </div>
    );
}

function PassWord({ }) {
    return (
        <div className='flex flex-col h'>
            <p className='text-center font-bold'>
                C Language
            </p>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='h-60 rounded-md w-full'
                    itemId={1}
                    src={Passwords}
                    alt='...'
                >
                </MDBCarouselItem>

            </MDBCarousel>
            <div className='flex justify-center items-center flex-col w-full'>
                <p className='font-bold truncate'>Password Manager</p>
                <p className='text-sm font-light text-center '> A password management system that incorporates C language pointers,
                    structures, and file input/output (I/O).  </p>
                <button className="rounded-md border-2 border-white w-40" onClick={() => window.open('https://github.com/Caleb-Orho/CBased/tree/main/PasswordManager', '_blank')}>Source Code</button>
            </div>
        </div>
    );
}

export { Picross, Bounce, Audio, Video, Store, Bank, Cipher, Exam, PassWord };