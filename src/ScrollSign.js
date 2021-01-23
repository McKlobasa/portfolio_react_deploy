import React from 'react'
import styled, { keyframes } from 'styled-components'

const comeInAnimation = keyframes`
  0% {  color: var(--secondary); }
  80% {  color: var(--secondary); }
 100% { color: white; }
`
const Sign = styled.div`
  margin: auto;
  font-family: 'Montserrat', sans-serif;
  width: fit-content;
  animation-name: ${comeInAnimation};
  animation-duration: 5s;
  animation-iteration-count: 1;
  height: 30px;
  font-size: 20px;
  color: white;
`

export default function ScrollSign(props) {
  return (
    <Sign>psst ... scroll down</Sign>
  )
}
