import React from "react"

import styled, { ThemeContext } from 'styled-components'
import styledTheme from "../styles/styledTheme"

export const PageContainer = styled.div`
    width:100vw;
    height: calc(100vh - var(--navbar-height));
    overflow:hidden;
`
