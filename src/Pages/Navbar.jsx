import React, { useState } from 'react'
import { Flex,Box,Spacer,Text,Heading, Button, background } from '@chakra-ui/react'
import '../App.css';
import { DownloadIcon, ViewIcon, } from '@chakra-ui/icons'
import { PhoneIcon, AddIcon,SunIcon,Icon,AttachmentIcon,AtSignIcon ,HamburgerIcon
  ,CalendarIcon,
  MoonIcon
} from '@chakra-ui/icons'
import { Link } from 'react-scroll';


const Navbar = ({handleClick,theme}) => {
  const openLink = (url) => {
    window.open(url);
};
const [click,setClick]=useState(false)
const closeMenu=()=>setClick(false)
  
  return (
   
  <div className='Navbar' id='nav-menu' style={{backgroundColor:theme?"black":"#5E3943"}} >
   <div className='Navbar-child1'>
    <h2>Sajan Kumar</h2>
    
    </div>
   <div className='Navbar-child2'>
   <Link to="hero" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 className='nav-link home'> Home</h2></Link>
   <Link to="about" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}><h2 className='nav-link about'> About</h2></Link>
   <Link to="SkillScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 className='nav-link skills'>Skills</h2></Link>
   <Link  to="projectScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu} className='nav-link projects'> <h2> Projects</h2></Link>
   <Link to="contactScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu} className='nav-link contact'> <h2>Contact</h2></Link>
   
                {/* <button id="resume-button-1">
                <a  id="resume-link-1" className="nav-link resume" href="https://drive.google.com/u/0/uc?id=1mhCgM-NP_RMa0xnfnSoQhD8wTBSyrjv6&export=download">Resume</a>
                </button> */}
                <div>
                        <a
                            href="https://drive.google.com/u/0/uc?id=1mhCgM-NP_RMa0xnfnSoQhD8wTBSyrjv6&export=download"
                            className="nav-link resume"
                            id="resume-link-1">
                            <div
                                onClick={() =>
                                    openLink(
                                        "https://drive.google.com/file/d/1mhCgM-NP_RMa0xnfnSoQhD8wTBSyrjv6/view?usp=sharing"
                                    )
                                }
                                className="navbar-resume"
                                id="resume-button-1">
                                Resume <DownloadIcon />
                            </div>
                        </a>
                    </div>
   </div>
  </div>
 
 
  )
}

export default Navbar