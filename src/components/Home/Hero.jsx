import hero from '../../assets/images/hero.png'
import "../../App.css";
import TypewriterComponent from 'typewriter-effect';
import { motion } from "framer-motion";

function Hero() {

  const Scale = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 2.0 },
    viewport: { once: true },
  };

  const Motionx = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" },
    viewport: { once: true },
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id='home'>
      <div className='grid grid-cols-1 h-screen md:h-screen bg-white'>
        <div className='space-y-16 md:space-y-6 md:my-28 my-auto'>
          <motion.div {...Scale}>
            <div className=''>
              <img className='mx-auto md:w-2/3' src={hero} alt="luthfiyasin" />
            </div>
          </motion.div>
          <motion.div {...Motionx}>
            <div>
              <h1 className="md:text-6xl text-4xl text-black font-extrabold text-center">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Bapak’e Jateng",
                      "Ngopeni Ngelakoni ",
                      "Kerja. Kerja. Kerja",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </h1>
            </div>
          </motion.div>
          <motion.div {...Motionx}>
            <div className="justify-center flex my-auto">
              <button id='dropbutton' onClick={scrollToContent}>
                <div className="" id="app">
                  <div className="arrow arrowSliding delay1"></div>
                  <div className="arrow arrowSliding delay2"></div>
                  <div className="arrow arrowSliding delay3"></div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}

export default Hero;
