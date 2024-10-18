import elgato from '../assets/image/elgato.jpg'
import linkedid from '../assets/icon/linkedid.svg'
import instagram from '../assets/icon/instagram.svg'
import github from '../assets/icon/github.svg'
import email from '../assets/icon/email.svg'
import arrow_white from '../assets/icon/arrow-white.svg'
import arrow_aquamarine from '../assets/icon/arrow-aquamarine.svg'



const Home = () => {


    return (
        <section>
            <div className="mx-auto w-full h-screen flex flex-row justify-center align-middle bg-deep-blue text-bone-white font-Inter">
                    <div id="left" className="sticky flex-1 px-[160px] py-[90px] top-0">
                    <h1 className="text-aquamarine font-Inter font-bold text-6xl mb-1">Raffi Ananta</h1>
                    <h2 className="font-Inter font-medium text-xl mb-1">Front-end Developer</h2>
                    <h3 className="text-shadow-gray font-Inter font-medium text-xl mb-10">I build pixel-perfect, engaging, and accessible digital experience</h3>

                    {/* Menu Navigation */}
                    <div id="menu" className='mb-10'>
                        <div className="flex">
                            <a className="w-full">
                                <h2 className='flex items-center text-xl font-bold font-Inter text-bone-white hover:`text-shadow-gray'>
                                    <hr className='w-[7rem] border-t-[2.5px] rounded mr-4 border-bone-white hover:border-shadow-gray'/>
                                </h2>
                            </a>
                        </div>
                    </div>
                        <div id="social" className='flex w-[12rem]  gap-x-6 ' >
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
                    <div id="right" className="flex-1 pr-[160px] overflow-y-auto h-[screen] scroll-smooth ">
                        <div className="h-[400vh]">
                            <div id="about" className='pt-[6.1rem]'>
                                <p className="text-shadow-gray font-Inter font-medium text-xl">The cat (Felis catus), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. Valued by humans for companionship and its ability to kill vermin, the cat's retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed.</p>
                            </div>
                            <div id="experience" className='pt-[6.1rem]'>
                                <div className='group hover:bg-bone-white hover:bg-opacity-10 hover:rounded p-5 flex border'>
                                    <div className='w-[25%] tracking-wide '>
                                        <h1 className='text-sm font-bold text-shadow-gray group-hover:text-bone-white z-10 '>2024<span>&nbsp;-&nbsp;</span>PRESENT</h1>
                                    </div>
                                    <div className='w-[75%]'>
                                        <h1 className='flex text-lg font-bold group-hover:text-aquamarine' >Freelance Front-end Developer<img className='ml-2 w-[3%] rotate-45' src={arrow_white} alt="" /></h1>
                                        <p></p>
                                        <div className='pt-5 flex gap-x-5'>
                                            <div className=''>
                                                <p>test</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='group hover:bg-bone-white hover:bg-opacity-10 hover:rounded p-5 flex border'>
                                    <div className='w-[25%]'>
                                        <h1 className='text-sm font-bold text-shadow-gray'>2024-Present</h1>
                                    </div>
                                    <div className='w-[75%]'>
                                        <h1 className='text-lg font-bold group-hover:text-aquamarine' >Freelance Front-end Developer</h1>
                                        <p>I build pixel-perfect, engaging, and accessible digital experiences. I build pixel-perfect, engaging, and accessible digital experiences.</p>
                                        <div className='pt-5'>
                                            <p>test</p>
                                        </div>
                                    </div>
                                    
                                </div>
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
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Home