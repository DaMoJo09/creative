import clock from '/Users/mojomadness/Desktop/creative/creative/src/img/clock.svg';
import diaphragm from  '/Users/mojomadness/Desktop/creative/creative/src/img/diaphragm.svg'
import money from '/Users/mojomadness/Desktop/creative/creative/src/img/money.svg';
import teamwork from '/Users/mojomadness/Desktop/creative/creative/src/img/teamwork.svg';
import img04 from '/Users/mojomadness/Desktop/creative/creative/src/img/img04.PNG';

// import {useInView} from "react-intersection-observer";
// import { useAnimation} from "framer-motion";
import {scrollReveal} from "/Users/mojomadness/Desktop/creative/creative/src/pages/animations.js"
import {useScroll} from './useScroll';

// Styles 

import { About, Description, Image} from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return(
    <Services variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
      <Description>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            < div className="icon" alt="home2">
              <img src={clock} alt="clock"/>
              <h3>Efficient</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
          <Card>
            < div className="icon" alt="home2">
              <img src={teamwork} alt=""/>
              <h3>TeamWork</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
          <Card>
            < div className="icon" alt="home2">
              <img src={diaphragm} alt="diaphragm"/>
              <h3>diaphragm</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
          <Card>
            < div className="icon" alt="home2">
              <img src={money} alt="money"/>
              <h3>money</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
    </Cards>
    </Description>
    <Image>
      <img src={img04} alt="img04"/>
    </Image>
    </Services>
  )
}

const Services = styled(About)` 
h2 {
  padding-bottom: 5rem;
}
p{
  width: 70%;
  padding: 2rem 0rem 4rem 0rem;
}


`

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`

const Card = styled.div`
flex-basis: 15rem;
.icon {
  display: flex;
  align-items: center;
  h3{
    margin-left: 1rem;
    background: whitesmoke;
    color: black;
    padding: 1rem;
  }
}
`
export default ServicesSection;