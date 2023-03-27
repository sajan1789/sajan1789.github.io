import React from 'react'
import { EmailIcon } from '@chakra-ui/icons';
import {MdGraphicEq } from 'react-icons/md'
import { Box, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Link,}
 from '@chakra-ui/react'
import "../CssPages/About.css"
const About = () => {
  return (
    <div id="about" className='about section'>

 <div  className='About' data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
    <h1 >About</h1>
    <h2 id="user-detail-name">I'm Sajan Kumar</h2>
    <p   id="user-detail-intro">A full stack web developer/MERN developer with 1000+ hours of coading experiance. My objective is simply
                to be the
                best web developer that i can be and to contribute to the technology industry all that i know.
                A quick learner and problem solver who can compete with the fast growing tech industry. Experties in
                building front end using React.js, Redux and developing the backend using Node.js and Express.js to
                build a full fledged web applications.</p>
<p>Drop a mail @ <Link href="mailto:sajan99559@gmail.com"><span style={{textDecoration:"underline",color:" rgb(254, 145, 25)",cursor:"pointer"}}>
    sajan99559@gmail.com </span></Link> <EmailIcon/> </p>
 </div>

 <div  className="slider">
     <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 99]}>
  <RangeSliderTrack bg='skyblue'>
    <RangeSliderFilledTrack bg='rgb(254, 145, 25)' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={1} index={0} >
    <Box color='red' as={MdGraphicEq} />
  </RangeSliderThumb>
  <RangeSliderThumb boxSize={1} index={1}>
    <Box color='Green' as={MdGraphicEq} />
  </RangeSliderThumb>
</RangeSlider>
</div>
    </div>
  )
}


export default About