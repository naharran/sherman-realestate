import React from 'react'
import styled from "styled-components"
import { Container } from '../ui/Container'
import Logo from "../svgs/Logo.svg";
import { Spacer } from '../ui/Spacer';
import { animationContainerClass, animationTextClass } from '../pages';
import styledTheme from '../styles/styledTheme';

const NavContainer = styled.div`
  display:flex;
  height: var(--navbar-height);
  align-items:center;
  justify-content:space-between;
  @media screen and (min-width: ${styledTheme.device.md} ) {
    margin:auto;
  }
`
const Links = styled.div`
  display:flex;
  justify-content:space-between;
`
const LinkContainer = styled.div`
  position:relative;
  display:flex;
  padding:40px 45px;
  overflow:hidden;
  margin-left:6.25rem;
`
const LinkItem = styled.span`
  position:absolute;
  right:0;
  left:0;
  top:0;
  bottom:0;
  height:fit-content;
  font-weight:600;
  white-space:nowrap;
  width:fit-content;
  margin-top:auto;
  margin-bottom:auto;
  margin-left: auto; 
  margin-right: auto; 
  transition: "top 0.8s, left 0.8s";
`
const LogoElement = styled.svg`
  width:20rem;
`
interface NavBarProps{
  onRouteChange:(link:string) =>{}
}

const NavBar = ({onRouteChange}:NavBarProps) => {
  const links = [{title:"About",},{title:"Contact Us"},{title:"Works"}]
  
  return (
    <NavContainer as={Container}>
      {/* <Logo as={LogoElement}/> */}
      <Links>
      {links.map((link,index) =>{
         return <LinkContainer onClick={() => onRouteChange(link.title)} key={index.toString() + link.title} className={animationContainerClass}>
          <LinkItem  className={animationTextClass}>{link.title}</LinkItem>
         </LinkContainer>
      })}
      </Links>
    </NavContainer>
  )
}

export default NavBar