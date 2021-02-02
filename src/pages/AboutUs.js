// Page Components

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection'

// Animations
import {motion} from "framer-motion";
import { pageAnimation } from "/Users/mojomadness/Desktop/creative/creative/src/pages/animations.js";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return(
    <motion.div  
    exit="exit" 
    variants={pageAnimation} 
    initial="hidden" 
    animate="show"
    >
    <AboutSection />
    <ServicesSection />
    <FaqSection />
    <ScrollTop />
    </motion.div>
  )
};

export default AboutUs;