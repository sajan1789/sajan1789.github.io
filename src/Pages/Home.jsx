import { Box,Flex,Image,Text,Button, RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Link,Icon} from '@chakra-ui/react'
import { DownloadIcon, ViewIcon, } from '@chakra-ui/icons'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import {MdGraphicEq } from 'react-icons/md'

import React from 'react'
import '../CssPages/Home.css';

const Home = () => {
  
  return (
    <div id="hero">
    <div className='Home' id="home" >
      <div className='Home-child1'  data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
          <div  >
            <img  className='home-img' w="80%" borderRadius="50%" src="https://avatars.githubusercontent.com/u/107640190?v=4" alt="Photo"/>
            </div>
         </div>
      <div className="Home-child2"  data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
         <h1>
           Full Stack Web Developer

         </h1>
         <h2  >Sajan Kumar</h2>

         <p></p>
         <div className='btn1'>
       {/* <Link href="https://drive.google.com/file/d/1T1ulhRKDDXJbwPg9lHT1dpU6UDOQ0Ec8/view?usp=sharing"> 
       <Button fontFamily="sans-serif" className='button'z id="resume-button-1" fontSize={{base:'1.1em'}}
       color="black"  bg="skyblue">Resume|<ViewIcon/></Button>
       </Link>  */}
       <Link href="https://drive.google.com/u/0/uc?id=1T1ulhRKDDXJbwPg9lHT1dpU6UDOQ0Ec8&export=download" id="resume-link-2"> <Button ml="4px"  id="resume-button-2" fontSize={{base:'1.1em'}} fontFamily="sans-serif" className='button'  color="black"  bgGradient='linear(to-r, darkgray,grey,white)' >Resume|<DownloadIcon/>
        </Button>
        </Link>
        <Link href="https://github.com/sajan1789"> <Button ml="4px"  fontSize={{base:'1.1em'}}  fontFamily="sans-serif" className='button'  color="white" colorScheme="linkedin">Github <Icon as={BsGithub}/>
        </Button>
        </Link>  
        
       


         </div>
      </div>
     </div>

     <div  className="slider">
     <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 99]}>
  <RangeSliderTrack bg='skyblue'>
    <RangeSliderFilledTrack bg='rgb(254, 145, 25)' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={1} index={0}>
    <Box color='red' />
  </RangeSliderThumb>
  <RangeSliderThumb boxSize={1} index={1}>
    <Box color='Green' as={MdGraphicEq} />
  </RangeSliderThumb>
</RangeSlider>
</div>
    </div>
  )
}

export default Home