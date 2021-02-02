// Animations
import {motion} from "framer-motion";
import { pageAnimation } from "/Users/mojomadness/Desktop/creative/creative/src/pages/animations.js";

const ContactUs = () => {
  return (
    <motion.div
    exit="exit" 
    variants={pageAnimation} 
    initial="hidden" 
    animate="show"
      // style={{ background: "whitesmoke" }}
      >
      <h1>ContactUs</h1>
    </motion.div>
  )
}

export default ContactUs