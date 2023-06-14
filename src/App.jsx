import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Navbar, NavbarBrand, Image, NavbarContent, NavbarItem} from '@nextui-org/react'
import { Link } from 'react-router-dom';
import './App.css';
import Typewriter from "typewriter-effect";

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 21000); // Delay the fade-in animation by 20 seconds
  }, []);

  return (
    <div>
      <div className={`flex rounded-sm border-transparent h-20`}>
        <Navbar isBlurred className={`flex ${fadeIn ? 'fade-in' : 'hidden'}`} maxWidth='full' position="sticky" classNames={{
    base: "anytailwindstyles",
    wrapper: "overflow-hidden",}}>
          <NavbarBrand className="flex">
          <Link to="." onClick={handleRefresh}>
            <motion.img
                initial={{ translateY: 0 }}
                animate={{ translateY: [-2, 0, -2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                src="src/assets/big-logo.png"
                width={25}
              />
          </Link>
          <p className={`font-extrabold text-zinc-700 text-l ml-6 select-none`}> RISHAB VIVEK</p>
          </NavbarBrand>

          <NavbarContent className='md:flex space-x-12' justify='end'>
            <NavbarItem as={Link} color="foreground" href="/">Projects</NavbarItem>
            <NavbarItem as={Link} color="foreground" href="#">Work Experience</NavbarItem>
            <NavbarItem as={Link} color="foreground" href="#">Skills</NavbarItem>
            <NavbarItem as={Link} color="foreground" href="#">Contact</NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      <div className={`main flex flex-col justify-center items-center h-screen mt-[-5vw] text-5xl select-none`}>
        <Typewriter
          onInit={(typewriter) => {
              typewriter
                  .changeDeleteSpeed(10)
                  .pauseFor(1000)
                  .typeString("Hi")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("I am a ")
                  .typeString('<span style="font-weight:bold; background-image: linear-gradient(45deg, #31f723, #38ffff);background-size: 150%; background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color: transparent; -moz-background-clip: text;-moz-text-fill-color: transparent;}">Student</span>')
                  .pauseFor(1500)
                  .deleteChars(7)
                  .typeString('<span style="font-weight:bold; background-image: linear-gradient(45deg, #2638ff, #9d00ff);background-size: 100%; background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color: transparent; -moz-background-clip: text;-moz-text-fill-color: transparent;}">Developer</span>')
                  .pauseFor(1500)
                  .deleteChars(9)
                  .typeString('<span style="font-weight:bold; background-image: linear-gradient(45deg, #ff1100, #fff700);background-size: 150%; background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color: transparent; -moz-background-clip: text;-moz-text-fill-color: transparent;}">Music Producer</span>')
                  .pauseFor(1500)
                  .deleteChars(14)
                  .typeString('<span style="font-weight:bold; background-image: linear-gradient(45deg, #4bcbfa, #ff66f0);background-size: 150%; background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color: transparent; -moz-background-clip: text;-moz-text-fill-color: transparent;}">Dreamer</span>')
                  .pauseFor(1500)
                  .deleteChars(11)
                  .typeString('<span style="font-weight:bold;">Rishab Vivek</span>')
                  .start();
          }}
          />
      </div>



    </div>
  )
}

export default App
