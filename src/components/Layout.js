import React from 'react'
import styled from "styled-components"
import {fontFamily} from "../styles/fonts"

const MainContainer = styled.div`
font-family: ${fontFamily}
`
function Layout({children}) {
  return (
    //TODO - Add SEO !
    <MainContainer>{children}</MainContainer>
  )
}

export default Layout