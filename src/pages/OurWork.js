import styled from 'styled-components';
import { Link } from 'react-router-dom';


import img02 from "/Users/mojomadness/Desktop/creative/creative/src/img/img02.PNG";
import img05 from "/Users/mojomadness/Desktop/creative/creative/src/img/img05.PNG";
import img13 from "/Users/mojomadness/Desktop/creative/creative/src/img/img13.PNG";

// Animations
import {motion} from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from "/Users/mojomadness/Desktop/creative/creative/src/pages/animations.js";

const OurWork = () => {
  return (
    <Work style={{ background: "transparent" }} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div variants={sliderContainer}>
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
      <motion.h2 variants={fade}>The Athlete</motion.h2>
      <motion.div variants={lineAnim}className="line"></motion.div>
      <Link to='/work/img02'>
        <Hide>
      <motion.img variants={photoAnim} src={img02} alt="athlete" />
      </Hide>
      </Link>
      </Movie>
      <Movie>
      <h2>The Racer</h2>
      <div className="line"></div>
      <Link to='/work/img05'>
      <img src={img05} alt="theracer" />
      </Link>
      </Movie>
      <Movie>
      <h2>Good Times</h2>
      <div className="line"></div>
      <Link to='/work/img13'>
      <img src={img13} alt="goodtimes" />
      </Link>
      </Movie>
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 10rem 5rem;
  h2{
    padding: 1rem 0rem;
  }
`
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
overflow: hidden;
`

// Frame Animations

const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2;
`;
const Frame2 = styled(Frame1)`
background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
background: #8effa1;
`;

export default OurWork
