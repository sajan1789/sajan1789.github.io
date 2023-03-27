import { Button,Link } from '@chakra-ui/react'
import { Icon,Box, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import {MdGraphicEq } from 'react-icons/md'

import React from 'react'
import "../CssPages/Projects.css"


const Projects = () => {
  return (
    <div id="projectScroll">
        <div className='Project' id="projects">
            <h1>Projects</h1>
            <div className="ProjectGrid">
            <Box   bg="#FEB2B2" className='project-card'  data-aos="fade-up"
    // data-aos-offset="-100"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    // data-aos-mirror="true"
    // data-aos-once="false"
    data-aos-anchor-placement="top-center"> 
                     <div >
                        <img className='project-img' src="https://camo.githubusercontent.com/45abde137404d354a64414a3f43f3b458fc40d9754366d5c61c24b1f9997a03c/68747470733a2f2f692e6962622e636f2f4c726451714b4d2f74617461636c69712e706e67" />
                    </div >
                    <div className='project-card-'>
                        <h1 className='project-title' >Formal Click</h1>
                         <h3 style={{marginBottom:"10px"}} className='project-description'>It is a clone of Tata Cliq website which we named as Formal Click. Tata Cliq is an Indian e-commerce company based in Mumbai, India.</h3>
                           
                            <li>Created the Sign-in and Sign-up functionality using auth0.</li>
                            <li>Created Home pages fully Responsive</li>
                          
                          
                       <h2 className='project-tech-stack' >Tech stack- React | Redux | JAVASCRIPT | Css | Chakra-Ui | Json-server | Auth0</h2>
                     <Link  className='project-deployed-link' href="https://tata-cliq-clone.vercel.app/"> <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  mb="15px" bg="#E53E3E">Website</Button></Link>  
                     <Link className='project-github-link' href="https://github.com/blackcode1996/Tata-Cliq-clone">  <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  bg="black" ml="10px" mb="15px"> Github<Icon as={BsGithub} /></Button></Link>  

                  
                    </div>

                </Box>
                <Box  bg="skyblue" style={{marginTop:"50px"}}  className='project-card' data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                     <div>
                        <img className='project-img' src="https://user-images.githubusercontent.com/96651559/221482831-dd15e5a0-a5ec-4b2c-99ae-7165f100c378.PNG" />
                     </div>
                     <div className='project-card-'>
                     <h1 className='project-title'>FurnitureTry</h1>
                       <h3 style={{marginBottom:"5px"}} className='project-description'>It is a clone of Pepperfry website which we named as FurnitureTry.FurnitureTry is an Indian online marketplace for furniture and home decor.</h3>
                       <li>Created the Sign-in and Sign-up functionality.</li>
                       <li>Created Add to Cart functionality using Redux</li>
                       <li>Created Footer Part</li>
                  <h2 className='project-tech-stack'>Tech stack- React | Redux | JAVASCRIPT | Css | Chakra-Ui | Json-server | Auth0</h2>
              
                 <Link  className='project-deployed-link' href="https://drive.google.com/file/d/1oHF4pgDOvReUdcor_8KQ0syIy3FEcfCL/view">  <Button fontSize={{base:'0.8em'}} className='btn' mb="20px" color="black" bg="white">web</Button></Link>
                 <Link className='project-github-link' href="https://github.com/sajan1789/Grbitz.com_Clone/tree/main/my-app"> <Button fontSize={{base:'0.8em'}} mb="20px"  className='btn' color="white" bg="black" ml="10px"> Github<Icon as={BsGithub} /></Button></Link>

                     </div>
                      
                </Box>
                <Box  mt="65px" bgGradient={[
    'linear( teal.300, yellow.400)',
    'linear( blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} className='project-card'  data-aos="fade-up"
  data-aos-offset="-100"
  data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out"
  data-aos-mirror="true"
  data-aos-once="false"
  data-aos-anchor-placement="top-center">
                    <div >
                        <img className='project-img' src="https://crusher8010.github.io/static/media/Project5.185df6464ca7218061dc.png" />
                    </div>
                    <div className='project-card-'>
                        <h1 className='project-title' >Zee5 </h1>
                       <h3 style={{marginBottom:"5px"}} className='project-description'> ZEE-5 is a subscription-based streaming website that allows users to watch TV shows, movies, web-series and News on an internet-connected device.</h3>
                            <li>Created the Sign-in and Sign-up functionality using Fire-Base</li>
                            <li>Created Footer Part</li>
                        
                       <h2 className='project-tech-stack'>Tech stack-React | JAVASCRIPT | Css | Chakra-Ui | Json-server | Fire-Base </h2>
                   
                     <Link className='project-deployed-link' href="https://chic-bonbon-92e1a1.netlify.app"> <Button  fontSize={{base:'0.8em'}} className='btn' color="white" bgGradient='linear(to-l, ,purple,#7928CA, #FF0080)'>Website</Button></Link>  
                     <Link className='project-github-link' href="https://github.com/sajan1789/Ecommerce-webside">  <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  bg="black" ml="10px"> Github<Icon as={BsGithub} /></Button></Link>  

                  
                    </div>

                </Box>
                <Box  mt="65px" bg="#FEB2B2" className='project-card'  data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"> 
                     <div >
                        <img className='project-img' src="https://camo.githubusercontent.com/45abde137404d354a64414a3f43f3b458fc40d9754366d5c61c24b1f9997a03c/68747470733a2f2f692e6962622e636f2f4c726451714b4d2f74617461636c69712e706e67" />
                    </div >
                    <div className='project-card-'>
                        <h1 className='project-title' >Formal Click</h1>
                         <h3 style={{marginBottom:"10px"}} className='project-description'>It is a clone of Tata Cliq website which we named as Formal Click. Tata Cliq is an Indian e-commerce company based in Mumbai, India.</h3>
                           
                            <li>Created the Sign-in and Sign-up functionality using auth0.</li>
                            <li>Created Home pages fully Responsive</li>
                          
                          
                       <h2 className='project-tech-stack' >Tech stack- React | Redux | JAVASCRIPT | Css | Chakra-Ui | Json-server | Auth0</h2>
                     <Link  className='project-deployed-link' href="https://tata-cliq-clone.vercel.app/"> <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  mb="15px" bg="#E53E3E">Website</Button></Link>  
                     <Link className='project-github-link' href="https://github.com/blackcode1996/Tata-Cliq-clone">  <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  bg="black" ml="10px" mb="15px"> Github<Icon as={BsGithub} /></Button></Link>  

                  
                    </div>

                </Box>
                
              
            </div>

        </div>
        <div  className="slider">
     <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 99]}>
  <RangeSliderTrack bg='skyblue'>
    <RangeSliderFilledTrack bg='rgb(254, 145, 25)' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={1} index={0}>
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

export default Projects

// {/* <div  className="slider">
// <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 99]}>
// <RangeSliderTrack bg='skyblue'>
// <RangeSliderFilledTrack bg='rgb(254, 145, 25)' />
// </RangeSliderTrack>
// <RangeSliderThumb boxSize={1} index={0}>
// <Box color='red' as={MdGraphicEq} />
// </RangeSliderThumb>
// <RangeSliderThumb boxSize={1} index={1}>
// <Box color='Green' as={MdGraphicEq} />
// </RangeSliderThumb>
// </RangeSlider>
// </div>
// </div>
// )
// } */}