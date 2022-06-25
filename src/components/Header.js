import React from 'react'
import styled from "styled-components"
import {fontMedium,fontFamily} from "../styles/fonts"
import {ReactComponent as Logo} from '../logo.svg';
import {ReactComponent as Facebook} from '../icons/social/facebook.svg';
import {ReactComponent as Instegram} from '../icons/social/instegram.svg';
import {ReactComponent as Whatsapp} from '../icons/social/whatsapp.svg';
import {ReactComponent as Gmail} from '../icons/social/gmail.svg';
import {Container} from "./Container"
const HeaderContainer = styled.div`
width:100%;
height:120px;
display:flex;
font-family: ${fontFamily};
font-weight: ${fontMedium};
box-shadow:0px 4px 8px rgba(0, 0, 0, 0.08);
`
const NavBar = styled.div`
    display:flex;
    align-items:flex-end;
`
const LogoContainer = styled.div`
    display:flex;
    align-items:center;
    margin-right:96px;
`
const List = styled.div`
        display:flex;
        margin-right:260px;
        width:450px;
        justify-content:space-between;
`
const ListItem = styled.div`
    display:flex;
    align-items:center;
`
const Social = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:140px;
`
const Header = ()=>{
  return (
    <HeaderContainer>
    <NavBar as={Container}>
    <LogoContainer>
    <Logo/>
    </LogoContainer>

        <List>
            <ListItem> About </ListItem>
            <ListItem> Works </ListItem>
            <ListItem> Prices </ListItem>
            <ListItem> Contact Us </ListItem>
        </List>
        <Social>
            <Facebook/>
            <Instegram/>
            <Whatsapp/>
            <Gmail/>
        </Social>
    </NavBar>
    </HeaderContainer>
  )
}

export default Header