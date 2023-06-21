import { useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion';
import '/src/App.css';
function WindowPage() {

    const ref = useRef(null);
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
            setAnimate(false);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Adjust this threshold as per your needs
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

    return (
        <div ref = {ref} className="h-screen bg-zinc-900 flex justify-center items-center">
            <div className='flex justify-center items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -1000, y: -30 }} // Initial position outside the left of the screen
                    animate={animate ? { opacity: 1, x: 50, y:-30} : { opacity: 0, x: -1000, y:-30 }} // Final position at the center
                    transition={{ duration: 1.25 }}
                    style={{ marginRight: '-90px', zIndex: 2, marginLeft: '100px'}}>
                    <img src="src/assets/r_vector.png" alt="Your Image" className='w-2/3 h-auto' />
                </motion.div>

                <div className="top-1/2  bg-white rounded-full w-4 h-4 transform " />

                <motion.div
                    initial={{ opacity: 0, x: 1000, y:40 }} // Initial position outside the left of the screen
                    animate={animate ? { opacity: 1, x: 50, y:40 } : { opacity: 0, x: 1000, y:40 }}// Final position at the center
                    transition={{ duration: 1.25 }}
                    style={{ marginLeft: '-110px', zIndex: 1, marginRight: '100px'}}>
                    <img src="src/assets/v_vector.png" alt="Your Image" className='w-2/3 h-auto' />
                </motion.div>

                

            </div>


        </div>


    )
}  


export default WindowPage