import React from "react"

import styled from 'styled-components'
import styledTheme from "../styles/styledTheme"

export const Container = styled.div`

    @media screen and (min-width: ${styledTheme.device.sm} ) {
        width:var(--sm-container-width);
    }
      @media (min-width: ${styledTheme.device.md}) {
        width:var(--md-container-width);
      }
      @media (min-width: ${styledTheme.device.lg}) {
        width:var(--lg-container-width);
      }
      width:var(--xs-container-width);
      max-width:80%;
      margin:auto;
  
`
