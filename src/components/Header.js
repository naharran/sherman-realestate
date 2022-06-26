import React,{useState} from 'react'
import styled from "styled-components"
import {fontMedium,fontFamily,fontSmall} from "../styles/fonts"
import {devices} from "../styles/devices"
import {ReactComponent as Logo} from '../logo.svg';
import {ReactComponent as Facebook} from '../icons/social/facebook.svg';
import {ReactComponent as Instegram} from '../icons/social/instegram.svg';
import {ReactComponent as Whatsapp} from '../icons/social/whatsapp.svg';
import {ReactComponent as Gmail} from '../icons/social/gmail.svg';
import {Container} from "./Container"
import hamburger from "../icons/hamburger_menu.png"
const HeaderContainer = styled.div`
@media ${devices.desktop} {
    height:120px;
    min-height:120px;
    max-height:120px;
}
  width:100%;
  height:120px;
  display:flex;
  font-family: ${fontFamily};
  font-weight: ${fontMedium};
  box-shadow:0px 4px 8px rgba(0, 0, 0, 0.08);
  height:${props => props.open? "30vw" : "120px"};
  min-height:${props => props.open? "250px" : "120px"};
  max-height:${props => props.open? "400px" : "120px"};



`
const HamburgerMenu = styled.img`
@media ${devices.desktop} {
    display:none;
}
    margin-left:auto;
    padding-right:1rem;
    display:flex;
    width:24px;
    height:24px;
    align-self:center;
`
const NavBar = styled.div`
    @media ${devices.desktop} {
        display:flex;
        align-items:flex-end;
        flex-direction:row;
        justify-content:space-between;    
    }
    align-items:center;    
    display:${props => props.open? "flex" : "none"};
    flex-direction:column;
`
const LogoContainer = styled.div`
@media ${devices.desktop} {
    display:flex;
    margin-right:6rem;

}
display:none;
`
const LogoContainerMobile = styled.div`
@media ${devices.desktop} {
    display:none
}
margin-right:6rem;
align-self:center;
`
const Left = styled.div`
@media ${devices.desktop} {
    flex-direction:row;
    align-items:flex-end;
}
display:flex;
flex-direction:column

`
const Right = styled.div`
    display:flex;
    align-items:center;
`

const List = styled.div`
@media ${devices.desktop} {

        display:flex;
        width:450px;
        justify-content:space-between;
}

`

const ListItem = styled.div`
    display:flex;
    font-size:${fontSmall}
    align-items:center;
`
const Social = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:140px;
`
const Header = ()=>{
    const [open,setOpen] = useState();
  return (
    <HeaderContainer open={open}>
    <LogoContainerMobile as ={Logo}/>
    <NavBar open={open} as={Container}>
        <Left open={open}>
    <LogoContainer as ={Logo}/>
        <List>
            <ListItem> About </ListItem>
            <ListItem> Works </ListItem>
            <ListItem> Prices </ListItem>
            <ListItem> Contact Us </ListItem>
        </List>
        </Left>
        <Right>
        <Social>
            <Facebook/>
            <Instegram/>
            <Whatsapp/>
            <Gmail/>
        </Social>
        </Right>
    </NavBar>
    <HamburgerMenu onClick={() => setOpen(!open)} src={hamburger} open={open}/>
    </HeaderContainer>
  )
}

export default Header