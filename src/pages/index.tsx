import React, { useRef, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import styled, { ThemeProvider } from 'styled-components'
import styledTheme from '../styles/styledTheme'
import GlobalStyle from '../styles/globalStyle'
import classNames from 'classnames'
import { Spacer } from '../ui/Spacer'
import { Mouse } from '../ui/Mouse'
import HomePage from '../components/HomePage'
import {gsap} from "gsap";
export const animationContainerClass = 'mouse-animation-container'
export const animationTextClass = 'mouse-animation-text'

const Content = styled.div`
  width: 100vw;
`

let currentPageX = 0
let currentPageY = 0

const IndexPage = () => {

  const onMouseMove = (event: MouseEvent) => {
    mouseRef.current.style.top = `${event.pageY}px`
    mouseRef.current.style.left = `${event.pageX}px`
    currentPageX = event.pageX
    currentPageY = event.pageY
  }
  const routingAnimationLength = "2.3s"
  const mouseRef = useRef<HTMLElement>()
  const elementHoveredRef = useRef<HTMLElement>()
  const [cursorHovered, setCursorHovered] = useState<Boolean>(false)
  const eventsRegistered = useRef<boolean>(false)

  const handleLinkChange = (linkSelected:string) =>{
    if(linkSelected==="About"){
      executeAnimationsHomeToAbout()
    }
    else{
      executeAnimationsAboutToHome()
    }
  }
  const executeAnimationsHomeToAbout = () =>{

    const blueLayer = document.getElementById("blue");
    const greenLayer = document.getElementById("green");
    const yellowLayer = document.getElementById("yellow");
    const whiteLayer = document.getElementById("yellow_1_");
    const tree = document.getElementById("tree");
    const pink = document.getElementById("pink")

      blueLayer.style.transform="translate(0px,-400px)";  
      greenLayer.style.transform = "translate(0px,-400px )";
      yellowLayer.style.transform= "translate(0px,-30px )";
      whiteLayer.style.transform= "translate(0px,-30px )";
      tree.style.transform= "translate(0px,1000px )";
      pink.style.transform= "translate(0px,700px)";
      greenLayer.style.transition= `transform ${routingAnimationLength} `;
      blueLayer.style.transition= `transform ${routingAnimationLength} `;
      yellowLayer.style.transition= `transform ${routingAnimationLength} `;
      whiteLayer.style.transition= `transform ${routingAnimationLength} `;
      tree.style.transition= `transform ${routingAnimationLength} `;
      pink.style.transition= `transform ${routingAnimationLength} `;
      pink.style.transitionDelay= `0.4s`;
  }

  const executeAnimationsAboutToHome = () =>{
    const blueLayer = document.getElementById("blue");
    const greenLayer = document.getElementById("green");
    const yellowLayer = document.getElementById("yellow");
    const whiteLayer = document.getElementById("yellow_1_");
    blueLayer.style.transform="translate(0px,0px)";  
    greenLayer.style.transform = "translate(0px,0px )";
    yellowLayer.style.transform= "translate(0px,0px )";
    whiteLayer.style.transform= "translate(0px,0px )";
    greenLayer.style.transition= `transform ${routingAnimationLength}`;
    blueLayer.style.transition= `transform ${routingAnimationLength}`;
    yellowLayer.style.transition= `transform ${routingAnimationLength}`;
    whiteLayer.style.transition= `transform ${routingAnimationLength}`;
  }
  useEffect(() => {
    if (mouseRef.current && !eventsRegistered.current) {
      document.addEventListener('mousemove', onMouseMove)
      eventsRegistered.current = true
      Array.from(
        document.getElementsByClassName(animationContainerClass)
      ).forEach(el => {
        el.addEventListener('mouseover', onMouseEnter)
        // el.addEventListener('mousemove', onMouseMoveHover)
        el.addEventListener('mouseleave', onMouseLeave)
      })
    }
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [mouseRef.current])

  const onMouseEnter = (event: MouseEvent) => {
    setCursorHovered(true)
    const horizonalDirection = event.pageX - currentPageX
    const diognalDirection = event.pageY - currentPageY
    const directionMetaData = {
      // movementX:
      //   horizonalDirection === 0
      //     ? null
      //     : horizonalDirection < 0
      //     ? 'left'
      //     : 'right',
      // movementY:
      //   diognalDirection === 0 ? null : diognalDirection > 0 ? 'bottom' : 'top',
        valueX:horizonalDirection,
        valueY:diognalDirection
    }
    console.log({ directionMetaData })
    const textEl = event?.currentTarget?.getElementsByClassName(
      animationTextClass
    )[0]
    textEl.style.color="white";
    textEl.style.transition= "top 0.3s, left 0.3s, right 0.3s,bottom 0.3s";
    if (horizonalDirection!==0){
      textEl.style.left = `${(horizonalDirection * 4).toString()}px`
    }
    if (diognalDirection!==0){
      textEl.style.top = `${(diognalDirection * 4).toString()}px`
    }

  }
  const onMouseMoveHover = (event: MouseEvent) => {
    // const horizonalDirection = event.pageX - currentPageX;
    // const diognalDirection = event.pageY - currentPageY;
    // console.log({ofsetX:event.offsetX,offsetY:currentPageY});
    setCursorHovered(true)
    const textEl = event?.currentTarget?.getElementsByClassName(
      animationTextClass
    )[0]
    textEl.style.left = `${event.offsetX - 100}px`
    textEl.style.top = `${event.offsetY - 20}px`
    textEl.style.transition = `top 0.3s, left 0.3s`
    textEl.style.transitionDelay = `70ms`
  }
  const onMouseLeave = (event: MouseEvent) => {
    console.log('mouse leave')
    elementHoveredRef.current = event.currentTarget
    const textEl = event?.currentTarget?.getElementsByClassName(
      animationTextClass
    )[0]
    // textEl.style.marginLeft = `0px`
    textEl.style.left = '0'
    textEl.style.right = '0'
    textEl.style.top = '0'
    textEl.style.bottom = '0'

    textEl.style.top = '0px'
    textEl.style.color="black";

    setCursorHovered(false)
  }
  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <Mouse
        cursorHovered={cursorHovered}
        className={classNames({ 'cursor-hover': cursorHovered })}
        ref={mouseRef}
      />
      <NavBar onRouteChange={handleLinkChange} />
      <HomePage />
    </ThemeProvider>
  )
}

export default IndexPage
