import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Tldr } from './images/tldr.svg'

const comeInAnimation = keyframes`
 0% { transform: Scale(50%) }
 100% { transform: Scale(100%) }
`
const Flag = styled.img`
  height: 20vmin;
  width: 15vmin;
  animation-name: ${comeInAnimation};
  animation-duration: ${props => props.animationDuration}s;
  animation-iteration-count: 1;
`
const Container = styled.div`
  margin: auto;
  width: 60vmin; 
  height: 25vmin;
`
const Button = styled.button`
  margin: 4vmin;
  border: none;
  background: none;
`
export default function Flags (props) {
  return (
    <Container>
      <Button onClick={() => props.setLang('SLO')}>
        <Flag src={"https://hatscripts.github.io/circle-flags/flags/si.svg"} animationDuration={1.0}/>
      </Button>
      <Button onClick={() => props.setLang('ENG')}>
	<Flag src={"https://hatscripts.github.io/circle-flags/flags/gb.svg"} animationDuration={1.5}/>
      </Button>
    </Container>

  )
}
