import styled from 'styled-components'

export const Mouse = styled.div`
position: absolute;
z-index:0;
width: 30px;
height: 30px;
border-radius: 50%;
cursor:none;
pointer-events:none;
background: #FB7D91;
transform:${props => props.cursorHovered === true? 'scale(4)': 'scale(1) translate(-50%, -50%)'};   
transition: all 0.4s ease;
transition-property: background, transform;
transform-origin:100% 100%;
`