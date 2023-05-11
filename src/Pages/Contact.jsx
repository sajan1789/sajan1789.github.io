import { AtSignIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Button, Input, Link, Textarea } from '@chakra-ui/react'
import { Icon, } from '@chakra-ui/react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import React from 'react'
import "../CssPages/Contact.css"

const Contact = () => {
  return (
    <div id="contactScroll">
        <div className="Contact"  id="contact"> 
            <h1>Contact</h1>
          <div className='Flex' data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            <div className='ContactDetails' data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                <Input  placeholder='enter your name' />
                <Input mt="40px" placeholder='enter your email' />
               <Textarea placeholder='Type your message...' />
               <Button >Send</Button>
            </div>
            <div className='ContactIcon' >
                    <div>
                       <img src="https://gr7800.github.io/static/media/bg1.d4a402f4b5da5590c675.gif" />
                    </div>
            </div>
          </div>
          <div className='logo' data-aos="fade-up"
    data-aos-offset="-300"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
          <Link  href="https://github.com/sajan1789"> <Button className='btn2' bg="#A0AEC0" id="contact-github"><Icon  w={[4,5]} h={12} as={BsGithub}/>.</Button></Link> 
          <Link href="https://www.linkedin.com/in/sajan-kumar-gupta/">  <Button className='btn2' colorScheme="linkedin" ml="20px"  id="contact-linkedin"><Icon  w={[4,5]} h={12} as={BsLinkedin} />.</Button></Link>
           <Link href="tel:+917903661341"> <Button className='btn2' bg="#48BB78" ml="20px" id="contact-phone"><PhoneIcon  w={[4,5]} h={12} />.</Button></Link>
           <Link href="mailto:sajan99559@gmail.com"> <Button className='btn2' id="contact-email"  bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} ml="20px"><EmailIcon  w={[4,5]} h={12} />.</Button></Link>


          </div>
            <h4 className='footer'>Built by Sajan Gupta © 2023</h4>
        </div>

    </div>
  )
}

export default Contact