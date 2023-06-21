import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Navbar, NavbarBrand, Image, NavbarContent, NavbarItem} from '@nextui-org/react'
import '/src/App.css';
import Typewriter from "typewriter-effect";
import * as THREE from 'three';

function FrontPage() {

    const [fadeIn, setFadeIn] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 23000); // Delay the fade-in animation by 23 seconds
  }, []);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const radius = 25; 
  const speed = 0.001; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      const angle = performance.now() * speed;
      const newX = Math.cos(angle) * radius;
      const newY = Math.sin(angle) * radius;
      setX(newX);
      setY(newY);
    }, 10);

    return () => clearInterval(intervalId);
  }, [radius, speed]);

 



  return (
    <div className="h-screen bg-white">
        <motion.div className={`${fadeIn ? 'circle-glow fade-in' : ''}`} style={{ x, y }} />
        <div className={`main flex flex-col justify-center items-center h-screen mt-[-5vw] text-5xl select-none`}>
            <Typewriter
            onInit={(typewriter) => {
                typewriter 
                    .changeDeleteSpeed(10)
                    .pauseFor(1000)
                    .typeString("Hi")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("I am Rishab")
                    .pauseFor(1500)
                    .deleteChars(6)
                    .typeString("a ")
                    .typeString('<span style="font-weight:bold; background-image: linear-gradient(45deg, #31f723, #38ffff);background-size: 150%; background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color: transparent; -moz-background-clip: text;-moz-text-fill-color: transparent;}">Student</span>')
                    .pauseFor(1000)
                    .deleteChars(7)
                    .typeString('<span style="font-weight:bold; background-image: linear-gradient(45deg, #2638ff, #9d00ff);background-size: 100%; background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color: transparent; -moz-background-clip: text;-moz-text-fill-color: transparent;}">Developer</span>')
                    .pauseFor(1000)
                    .deleteChars(9)
                    .typeString('<span style="font-weight:bold; background-image: linear-gradient(45deg, #ff1100, #fff700);background-size: 150%; background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color: transparent; -moz-background-clip: text;-moz-text-fill-color: transparent;}">Music Producer</span>')
                    .pauseFor(1000)
                    .deleteChars(14)
                    .typeString('<span style="font-weight:bold; background-image: linear-gradient(45deg, #4bcbfa, #ff66f0);background-size: 150%; background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color: transparent; -moz-background-clip: text;-moz-text-fill-color: transparent;}">Dreamer</span>')
                    .pauseFor(1000)
                    .deleteAll(20)
                    .typeString('<span style="font-weight:bold;">Rishab Vivek</span>')
                    .start();
            }}
            />
                <hr className= {`${fadeIn ? 'typewriter-line' : 'hidden'}`} />
                <div className='typewriter-line-placeholder' />


        </div>
    </div>
  )

}

export default FrontPage