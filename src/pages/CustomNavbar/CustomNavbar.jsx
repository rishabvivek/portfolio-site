import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Navbar, NavbarBrand, Image, NavbarContent, NavbarItem} from '@nextui-org/react'
import { Link } from 'react-scroll';
import '/src/App.css';



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
      <div className={`flex rounded-sm border-transparent h-20 bg-white`}>
        <Navbar className={`flex ${fadeIn ? 'fade-in' : 'hidden'}`} maxWidth='full' position="sticky">
          <NavbarBrand className="flex">
          <Link to="frontpage" smooth = {true} duration = {500}>
            <motion.img
                initial={{ translateY: 0 }}
                animate={{ translateY: [-3, 0, -3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                src='/big-logo.png'
                width={25}
              />
          </Link>
          <p className={`font-extrabold text-zinc-700 text-l ml-6 select-none`}> RISHAB VIVEK</p>
          </NavbarBrand>

          <NavbarContent className='md:flex space-x-12 select-none' justify='end'>
            <NavbarItem as={Link} color="foreground"  to = "window-page" smooth = {true} duartion = {500}>Projects</NavbarItem>
            {/* <NavbarItem as={Link} color="foreground" href="#">Work Experience</NavbarItem>
            <NavbarItem as={Link} color="foreground" href="#">Skills</NavbarItem>
            <NavbarItem as={Link} color="foreground" href="#">Contact</NavbarItem> */}
          </NavbarContent>
        </Navbar>
      </div>
    )
}

export default CustomNavbar