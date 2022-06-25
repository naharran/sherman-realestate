import styled from "styled-components"
import React from 'react'
import {fontBoldest,fontLarge} from "../styles/fonts"
export const Button = styled.button`
    width: 280px;
    height: 64px;
    font-size: ${fontLarge};
    font-weight:${fontBoldest};
    background:transparent;
    z-index:1;
    border : 6px solid ${props => props.color };
    color:${props => props.color };
`

const RectangleButton =({label,color}) => {
  return (
    <Button color={color}>{label}</Button>
  )
}

export default RectangleButton