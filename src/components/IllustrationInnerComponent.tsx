import Illustration from '../svgs/homePageIllustration.svg'
import styled, { ThemeProvider } from 'styled-components'
import React from 'react'
const IllustrationContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 1920px;
  z-index: -1;
`
const IllustrationEl = styled.svg`
  width: 1920px;
  z-index: -1;
`
const IllustrationInnerComponent = () => {
  const IllustrationContainer = styled.div`
    position: absolute;
    bottom: 0px;
    width: 1920px;
    z-index: -1;
  `
  const IllustrationEl = styled.svg`
    width: 1920px;
    z-index: -1;
  `
  return (
    <IllustrationContainer>
      <Illustration as={IllustrationEl} />
    </IllustrationContainer>
  )
}
export default IllustrationInnerComponent
