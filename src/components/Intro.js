import React from 'react'
import styled from "styled-components"
import {fontFamily,fontBold,fontMedium} from "../styles/fonts"
import MyVideo from "../images/introBeach.mp4";
import RectangleButton from "./RectangleButton"
const IntroContainer = styled.div`
display:flex;
postision:relative;
width:100%;
z-index:1;
justify-content:center;
`
const Text = styled.div`
    display:flex;
    margin-top:114px;
    flex-direction:column;
    width:679px;
    z-index:1;
    font-size:80px;
    font-family: ${fontFamily};
    line-height:84px;
`
const TextLight = styled.div`
    font-weight: ${fontMedium};
`
const TextBold = styled.div`
    font-weight: ${fontBold};
`

const IntroImg = styled.video`
    top:0px;
    z-index:0;
    left:0;
    top:360px;
    width:100vw;
    position:absolute;
`
const Buttons = styled.div`
    display:flex;
    margin-top:50px;
    justify-content:space-between;
    width:100%;
`

const Intro = () => {
  return (
    <IntroContainer>
<Text>
    <TextLight>
        {"We Make The Web A"}
    </TextLight>
    <TextBold>
        {"BETTER PLACE"}
    </TextBold>
    <Buttons>
        <RectangleButton color={"#FA7C92"} label={"Works"}/>
        <RectangleButton color={"#66AB8C"} label={"Prices"}/>
    </Buttons>
</Text>
    <IntroImg controls loop AutoPlay={"AutoPlay"} preLoad="auto">
    <source src={MyVideo} type="video/mp4" />
</IntroImg>
    </IntroContainer>
  )
}

export default Intro