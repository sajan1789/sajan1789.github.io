// import React, { useState } from 'react'
// import { Flex,Box,Spacer,Text,Heading, Button, background } from '@chakra-ui/react'
// import '../App.css';
// import { DownloadIcon, ViewIcon, } from '@chakra-ui/icons'
// import { PhoneIcon, AddIcon,SunIcon,Icon,AttachmentIcon,AtSignIcon ,HamburgerIcon
//   ,CalendarIcon,
//   MoonIcon
// } from '@chakra-ui/icons'
// import { Link } from 'react-scroll';


// const Navbar = ({handleClick,theme}) => {
//   const openLink = (url) => {
//     window.open(url);
// };
// const [click,setClick]=useState(false)
// const closeMenu=()=>setClick(false)
  
//   return (
   
//   <div className='Navbar' id='nav-menu' style={{backgroundColor:theme?"black":"#5E3943"}} >
//    <div className='Navbar-child1'>
//     <h2>Sajan Kumar</h2>
    
//     </div>
//    <div className='Navbar-child2'>
//    <Link to="hero" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 className='nav-link home'> Home</h2></Link>
//    <Link to="about" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}><h2 className='nav-link about'> About</h2></Link>
//    <Link to="SkillScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 className='nav-link skills'>Skills</h2></Link>
//    <Link  to="projectScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu} className='nav-link projects'> <h2> Projects</h2></Link>
//    <Link to="contactScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu} className='nav-link contact'> <h2>Contact</h2></Link>
   
               
//                 <div>
//                         <a
//                             href="https://drive.google.com/u/0/uc?id=1mhCgM-NP_RMa0xnfnSoQhD8wTBSyrjv6&export=download"
//                             className="nav-link resume"
//                             id="resume-link-1">
//                             <div
//                                 onClick={() =>
//                                     openLink(
//                                         "https://drive.google.com/file/d/1mhCgM-NP_RMa0xnfnSoQhD8wTBSyrjv6/view?usp=sharing"
//                                     )
//                                 }
//                                 className="navbar-resume"
//                                 id="resume-button-1">
//                                 Resume <DownloadIcon />
//                             </div>
//                         </a>
//                     </div>
//    </div>
//   </div>
 
 
//   )
// }

// export default Navbar
import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import "../App.css";
import {
  PhoneIcon,
  AddIcon,
  SunIcon,
  AttachmentIcon,
  AtSignIcon,
  HamburgerIcon,
  CalendarIcon,
  MoonIcon,
  DownloadIcon,
} from "@chakra-ui/icons";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { Link } from "react-scroll";

const Navbar = ({ handleClick, theme }) => {
  const [click, setClick] = useState(false);
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const closeMenu = () => setClick(false);
  const toggleMenu = () => {
    setOpenMenuBar(!openMenuBar);
  };
  const openLink = (url) => {
    window.open(url);
};
  return (
    <div
      className="Navbar"
      id="nav-menu"
      style={{ backgroundColor: theme ? "black" : "#011627" }}
    >
      <div className="Navbar-child1">
        <h2>
          <AtSignIcon />Sajan</h2>
        <Button onClick={handleClick}>
          {theme ? <SunIcon cursor="pointer" /> : <MoonIcon cursor="pointer" />}
        </Button>
      </div>
      <MenuWrapper onClick={toggleMenu}>
        <MenuButton openMenuBar={openMenuBar} />
      </MenuWrapper>
      <div
       
        className={`section_wrapper ${openMenuBar ? "open_menu_bar" : ""}`}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={closeMenu}
        >
          {" "}
          <h2 id="l" className="nav-link home">
            <CalendarIcon /> Home
          </h2>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-180}
          duration={700}
          onClick={closeMenu}
        >
          <h2 id="l" className="nav-link about">
            <HamburgerIcon /> About
          </h2>
        </Link>
        <Link
          to="SkillScroll"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={closeMenu}
        >
          {" "}
          <h2 id="l" className="nav-link skills">
            <AddIcon />
            Skills
          </h2>
        </Link>
        <Link
          to="projectScroll"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={closeMenu}
        >
          {" "}
          <h2 className="nav-link projects" id="l">
            <AttachmentIcon /> Projects
          </h2>
        </Link>
        <Link
          to="contactScroll"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={closeMenu}
        >
          {" "}
          <h2 className="nav-link contact" id="l">
            <PhoneIcon />
            Contact
          </h2>
        </Link>
        <div>
                        <a
                            href="https://drive.google.com/u/0/uc?id=1obTpyDhRp54LpszOAZORQhXybg2wfqsI&export=download"
                            className="nav-link resume"
                            id="resume-link-1">
                            <div
                                onClick={() =>
                                    openLink(
                                        "https://drive.google.com/file/d/1obTpyDhRp54LpszOAZORQhXybg2wfqsI/view?usp=sharing_link"
                                    )
                                }
                                className="navbar-resume"
                                id="resume-button-1">
                               <h2 id="l"> Resume <DownloadIcon /></h2>
                            </div>
                        </a>
                    </div>
      </div>
    </div>
  );
};

const MenuWrapper = styled.div`
  position: absolute;
  z-index: 999;
  display: none;
  @media screen and (max-width: 675px) {
    right: 15px;
    top: 15px;
    display: block;
  }
`;
export default Navbar;