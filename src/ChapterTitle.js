import React from 'react'
import styled from 'styled-components'


const TextBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
    box-sizing: border-box;
    padding-left: 2vh;
    padding-right: 2vh;
   font-family: "Trebuchet MS", sans-serif;
   color: var(--secondary);
   font-size: 4vh;
   letter-spacing: -2px;
   border-bottom: 2px solid var(--secondary);
   text-transform: uppercase;
`

export default function ChapterTitle (props) {
  return (
  <TextBox>
    <Title>{props.children}</Title>
  </TextBox>
  )
}


