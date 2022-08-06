import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'
import { PageContainer } from '../ui/PageContainer'
import { Container } from '../ui/Container'
import { Spacer } from '../ui/Spacer'

// const IllustrationContainer = styled.div`
//   position: absolute;
//   bottom: 0px;
//   width: 1920px;
//   z-index:-1;
// `
// const IllustrationEl = styled.svg`
//   width: 1920px;
//   z-index:-1;
// `
const Content = styled.div`
z-index:1;
width:50%;
padding-top:320px;
font-family:'Rockwell';
height: calc(100vh - var(--navbar-height));
`
const Title = styled.h1`
font-size:4rem;
font-family:'Rockwell-bold';
font-weight:700;
`
const SubTitle = styled.h3`
  font-family:'Rockwell';
  line-height:2.25rem;
  font-size:2.25rem;
`
const Paragraph = styled.p`
font-family: 'Montserrat', sans-serif;
line-height:1.523rem;
font-size:1.25rem;
`;
const AboutPage = () => {
  return (
    <PageContainer>
      <Content as={Container}>
          <Title>{"Pataya Studio"}</Title>
          <Spacer amount={1.12} direction='top'/>
          <SubTitle>{"We will build your online presence "}</SubTitle>
          <Spacer amount={1.12} direction='top'/>
          <Paragraph>{"Our mission is to create a unique tailor maid web application that will match our cliets spirit, needs and individual taste, while combining our own passion for technology and innovative design. "}</Paragraph>
        </Content>
    </PageContainer>
  )
}

export default AboutPage
