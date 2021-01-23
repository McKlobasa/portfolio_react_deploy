import React from 'react'
import styled from 'styled-components'

const Chapter = styled.p`
  color: var(--text);
  margin: auto;
  padding: 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5vh;
  text-align: left;
  line-height: 1.4;
  background: linear-gradient(180deg, white 0%, #f6f6f6  100%);
  &::first-letter {
    font-size: 29px;
    font-weight: bold;
    color: white;
    background: var(--highlight);
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 0px;
    border-radius: 0px 10px 0px 10px;
  }
`
const Text = styled.p`
 max-width: 900px;
  margin: auto;
`


export default function ChapterContent (props) {
  return (
    <Chapter><Text>{props.children}</Text></Chapter>
  )
}


