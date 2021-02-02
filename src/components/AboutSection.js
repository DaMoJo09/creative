import img01 from "/Users/mojomadness/Desktop/creative/creative/src/img/img01.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "/Users/mojomadness/Desktop/creative/creative/src/pages/animations.js";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We Work in</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
               <span>MADNESS</span> 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}></motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          <span>MAD</span>
          <span>MIXED</span>
          <span>MEDIA</span>
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={img01} alt="thinker" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;