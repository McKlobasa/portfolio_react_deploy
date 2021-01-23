import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Tldr } from './images/tldr.svg'

const comeInAnimation = keyframes`
 0% { height: 0px; width: 0px; }
 100% { height: 20vmin; width: 15vmin; }
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
      <Button>
        <Flag src={"https://hatscripts.github.io/circle-flags/flags/si.svg"} animationDuration={1.0}/>
      </Button>
      <Button>
	<Flag src={"https://hatscripts.github.io/circle-flags/flags/gb.svg"} animationDuration={1.5}/>
      </Button>
    </Container>

  )
}
