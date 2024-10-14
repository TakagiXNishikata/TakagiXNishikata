// import elgato from '../assets/image/elgato.jpg'
import linkedid from '../assets/icon/linkedid.svg'
import instagram from '../assets/icon/instagram.svg'
import github from '../assets/icon/github.svg'
import email from '../assets/icon/email.svg'

import { useState, useEffect } from 'react'

const sections = [
    { id: 'about',      label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'project',    label: 'Project' },
]

const Home = () => {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section.id);
                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop;
                    const sectionHeight = sectionElement.offsetHeight;

                    if (scrollPosition >= sectionTop - sectionHeight / 3) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section>
            <div className="mx-auto w-full h-screen flex flex-row justify-center align-middle bg-deep-blue text-bone-white">
                    <div id="left" className="sticky flex-1 px-[100px] py-[75px] top-0">
                    <h1 className="text-aquamarine font-Inter font-bold text-6xl mb-1">Raffi Ananta</h1>
                    <h2 className="font-Inter font-medium text-xl mb-1">Front-end Developer</h2>
                    <h3 className="text-shadow-gray font-Inter font-medium text-xl mb-10">I build pixel-perfect, engaging, and accessible digital experience</h3>

                    {/* Menu Navigation */}
                    <div id="menu" className='mb-10'>
                        {sections.map((section) => (
                        <div key={section.id} className="flex">
                            <a href={`#${section.id}`} className="w-full">
                                <h2
                                className={`flex items-center text-xl font-bold font-Inter ${
                                    activeSection === section.id ? 'text-bone-white' : 'text-shadow-gray'
                                }`}
                                >
                                <hr
                                    className={`w-[7rem] border-t-[2.5px] rounded mr-4 ${
                                    activeSection === section.id ? 'border-bone-white' : 'border-shadow-gray'
                                }`}
                                />
                                {section.label}
                                </h2>
                            </a>
                        </div>
                        ))}
                    </div>
                        <div id="social" className='flex w-[15rem]  gap-x-6' >
                            <img className='fill-aquamarine w-[50%]' src={linkedid} alt="linkedid"/>
                            <img className='fill-aquamarine w-[50%]' src={github} alt="github"/>
                            <img className='fill-aquamarine w-[50%]' src={instagram} alt="instagram"/>
                            <img className='fill-aquamarine w-[50%]' src={email} alt="email"/>
                        </div>
                    </div>
                    
                    {/* Right Content */}
                    <div id="right" className="flex-1 pr-[100px] overflow-y-auto h-[screen] scroll-smooth ">
                        <div className="h-[400vh]">
                            <div id="about" className='pt-[5rem]'>
                                <p className="text-shadow-gray font-Inter font-medium text-xl">The cat (Felis catus), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. Valued by humans for companionship and its ability to kill vermin, the cat's retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed.</p>
                            </div>
                            <div id="experience" className='pt-[5rem]'>
                                <p>The cat (Felis catus), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. Valued by humans for companionship and its ability to kill vermin, the cat's retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed.</p>
                            </div>
                            <div id="project" className='pt-[5rem]'>
                                <p>The cat (Felis catus), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. Valued by humans for companionship and its ability to kill vermin, the cat's retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Home