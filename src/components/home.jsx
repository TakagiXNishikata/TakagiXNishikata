import elgato from '../assets/image/elgato.jpg'
import linkedid from '../assets/icon/linkedid.svg'
import instagram from '../assets/icon/instagram.svg'
import github from '../assets/icon/github.svg'
import email from '../assets/icon/email.svg'
import arrow_white from '../assets/icon/arrow-white.svg'
import arrow_aquamarine from '../assets/icon/arrow-aquamarine.svg'
import { Scrollspy } from '@makotot/ghostui'
import { useRef } from 'react'
// import { useState, useEffect, useRef } from 'react'


const Home = () => {
    const parentScrollContainerRef = useRef(null);

    return (
        <section>
            <div className="mx-auto w-full h-screen flex flex-row justify-center align-middle bg-deep-blue text-bone-white font-Inter">
                {/* Left Section */}
                <div id="left" className="sticky flex-1 px-[160px] py-[90px] top-0">
                    <h1 className="text-aquamarine font-Inter font-bold text-6xl mb-1">Raffi Ananta</h1>
                    <h2 className="font-Inter font-medium text-xl mb-1">Front-end Developer</h2>
                    <h3 className="text-shadow-gray font-Inter font-medium text-xl mb-10">
                        I build pixel-perfect, engaging, and accessible digital experiences
                    </h3>

                    {/* Menu Navigation */}
                    <div id="menu" className='mb-10'>
                        <div className="flex">
                            <div className="w-[90%] border">
                                <a href="#about" className=''>
                                    <h2 className='group flex items-center text-xl font-bold font-Inter text-shadow-gray hover:text-bone-white'>
                                        <hr className='w-[12rem] border-t-[2.5px] rounded mr-4 border-bone-white group-hover:border-bone-white'/>
                                        About
                                    </h2>
                                </a>
                                <a href="#experience">
                                    <h2 className='flex items-center text-xl font-bold font-Inter text-bone-white hover:text-shadow-gray'>
                                        <hr className='w-[12rem] border-t-[2.5px] rounded mr-4 border-bone-white group-hover:border-bone-white' />
                                        Experience
                                    </h2>
                                </a>
                                <a href="#project">
                                    <h2 className='flex items-center text-xl font-bold font-Inter text-bone-white hover:text-shadow-gray'>
                                        <hr className='w-[12rem] border-t-[2.5px] rounded mr-4 border-bone-white group-hover:border-bone-white'/>
                                        Project
                                    </h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div id="social" className='flex w-[12rem] gap-x-6'>
                        <a className='w-[50%] hover:scale-[1.1]' href="">
                            <img className='fill-aquamarine' src={linkedid} alt="linkedid"/>
                        </a>
                        <a className='w-[50%] hover:scale-[1.1]' href="">
                            <img className='fill-aquamarine' src={github} alt="github"/>
                        </a>
                        <a className='w-[50%] hover:scale-[1.1]' href="">
                            <img className='fill-aquamarine' src={instagram} alt="instagram"/>
                        </a>
                        <a className='w-[50%] hover:scale-[1.1]' href="">
                            <img className='fill-aquamarine' src={email} alt="email"/>
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div    
                id="right"
                className="fpx-6 w-1/2 mx-auto py-24"
                ref={parentScrollContainerRef}        
                >
                    <Scrollspy
                    activeClass="active"
                    offsetBottom={80}
                    scrollThrottle={20}
                    useBoxMethod
                    >
                    <section id="about" className='flex flex-col gap-3 mb-16 ]'>
                        <p className="text-shadow-gray font-Inter font-medium text-xl">
                            The cat (Felis catus) is a small domesticated carnivorous mammal.
                        </p>
                    </section>
                    <div id="experience" className='pt-[6.1rem]'>
                    
                    </div>
                    <div id="project" className='pt-[6.1rem]'>
                        <div className='hover:bg-bone-white hover:bg-opacity-10 hover:rounded p-5 flex'>
                            <div className='w-[15%]'>
                                <img src={elgato} alt="elgato" />
                            </div>
                            <div>
                                <h1 className='text-7xl'>Title</h1>
                                <p>Subtitle</p>
                            </div>
                        </div>
                    </div>
                    </Scrollspy>
                </div>
            </div>
        </section>
    );
}

export default Home;
