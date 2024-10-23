import About from './components/About';
import { useRef } from 'react';
import ScrollSpy from 'react-ui-scrollspy';
// import SocialMedia from './components/SocialMedia';
import Experience from './components/Experience';
import experience from './data/experience.json';
import Summary from './components/Summary';
// import LinkArrow from './components/LinkArrow';
import navigation from './data/navigation.json';
// import { useNavigate } from "react-router-dom";
import SectionTitle from './components/SectionTitle';
// import { featured } from './data/featured';
// import Footer from "./components/Footer";

function App() {
  // const navigate = useNavigate();
  const parentScrollContainerRef = useRef(null);
  const dataExperience = experience.experience;
  const dataNav = navigation.navigation;
  // const dataProjects = featured;

  const onPress = (e) => {
    e.prevetDefault();
      const target = window.document.getElementById(
        e.currentTarget.href.split("#")[1]
      );
      if (target) {
        var headerOffset = 100;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
  };

  return (
    <div className='mx-auto lg-max-w-none xl:max-w-screen-xl lg:px-6 xl: px-24 min-h-screen'>
      <div className='lg:flex lg:gap-4'>
      <aside className='py-16 xl:py-24 px-6 mx-auto md:w-4/6 lg:w-1/2 lg:sticky max-h-screen flex flex-col justify-between top-0'>
      <Summary data={dataNav} onPress={onPress}/>
      {/* <SocialMedia/> */}
      </aside>
      <main
        ref={parentScrollContainerRef}
        className='px-6 md:w-4/6 lg:w-1/2 mx-auto py-16 xl:py-24'
      >
        <ScrollSpy
          activeClass="active"
          offsetBottom="80"
          scrollThrottle={20}
          useBoxMethod
        >
          <section id='about' className='flex flex-col gap-3 mb-16 lg:mb-40'>
            <SectionTitle title="About"/>
            <About/>
          </section>
          <section id='experience' className='mb-16 lg:mb-40'>
            <SectionTitle title="Experience"/>
            <ul>
              {dataExperience.map((item) => (
                <Experience key={item.job_id} data={item} /> 
              ))}
            </ul>
            <div className="group mt-4 inline-flex">
              <a
                href="#"
                className="flex group-hover:text-aquamarine cursor-pointer text-bone-white font-semibold"
              >
                View Full CV
              </a>
            </div> 
          </section>
          <section id='project' className='mb-40'>
            <SectionTitle title="Projects"/>
            <ul>
              {/* {dataProject.map((item) => (
                <Project key={item.project_id} data={item}/>
              ))} */}
            </ul>
          </section>
        </ScrollSpy>
      </main>
      </div> 
    </div>
  );
}

export default App
