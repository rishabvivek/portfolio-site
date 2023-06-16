import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Navbar, NavbarBrand, Image, NavbarContent, NavbarItem} from '@nextui-org/react'
import { Link } from 'react-router-dom';
import '/src/App.css';
import Typewriter from "typewriter-effect";


function CustomNavbar() {

    const [fadeIn, setFadeIn] = useState(false);

    const handleRefresh = () => {
        window.location.reload();
    };

    useEffect(() => {
        setTimeout(() => {
        setFadeIn(true);
        }, 23000); // Delay the fade-in animation by 23 seconds
    }, []);

    return (
        <div className={`flex rounded-sm border-transparent h-20`}>
        <Navbar isBlurred className={`flex ${fadeIn ? 'fade-in' : 'hidden'}`} maxWidth='full' position="sticky" classNames={{
    base: "anytailwindstyles",
    wrapper: "overflow-hidden",}}>
          <NavbarBrand className="flex">
          <Link to="." onClick={handleRefresh}>
            <motion.img
                initial={{ translateY: 0 }}
                animate={{ translateY: [-3, 0, -3] }}
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
    )
}

export default CustomNavbar