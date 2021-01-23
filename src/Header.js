import React from 'react'
import styled from 'styled-components'
import {withTheme} from './contexts/ScrollProvider.js'


import { ReactComponent as Header1 } from './images/Header1.svg'
import { ReactComponent as Header2 } from './images/Header2.svg'
import { ReactComponent as Header3 } from './images/Header3.svg'
import { ReactComponent as Header4 } from './images/Header4.svg'

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  margin: auto;
  font-size: 35px;
  background: white;
  text-align: center;
  background-color: white;
  padding: 10px;
  width: 100vw;
  height: fit-content;
  z-index: 90;
  display: block;
  border-bottom: 10px solid var(--highlight);
`
const FlexBox = styled.div`
  z-index: 100;
  width: fit-content;
  height: fit-content;
  margin: auto;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  align-content: center;
`
const GrowingWrapper1 = styled.div`
  flex: 1;
  flex-grow: 0;
  display: inline-block;
  margin-top: 0.5vh;
  height: ${props => props.scrollPosition < 300? 0 : props.scrollPosition < 550? (props.scrollPosition - 300)/ 80 : 3.7}vh;
`
const GrowingWrapper2 = styled.div`
  flex: 1;
  flex-grow: 0;
  display: inline-block;
  margin-top: 0.2vh;
  height: ${props => props.scrollPosition < 300? 0 : props.scrollPosition < 550? (props.scrollPosition - 300)/ 60 : 5}vh;
`
const NormalWrapper = styled.div`
  flex: 1;
  flex-grow: 0;
  display: inline-block;
  height: ${props => props.scrollPosition < 200? 13.5 - props.scrollPosition/20  : 3.5}vh;
  margin: 3px;
`

function Header (props) {
  return (
    <StyledHeader> 
      <FlexBox>
        <GrowingWrapper1 scrollPosition={props.scrollPosition}>
          <Header1 style={{height:"100%", width:'auto'}}/>
        </GrowingWrapper1>
        <NormalWrapper scrollPosition={props.scrollPosition}>
          <Header2 style={{height:"100%", width:'auto'}}/>
        </NormalWrapper>
        <GrowingWrapper2 scrollPosition={props.scrollPosition}>
          <Header3 style={{height:"100%", width:'auto'}}/>
        </GrowingWrapper2>
        <NormalWrapper scrollPosition={props.scrollPosition}>
          <Header4 style={{height:"100%", width:'auto'}}/>
        </NormalWrapper>
      </FlexBox>
    </StyledHeader> 
  )
}

export default withTheme(Header)
