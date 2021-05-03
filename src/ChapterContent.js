import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ChapterRight = styled.p`
  color: var(--text);
  margin-left: 0px;
  margin-right: auto;
  padding: 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5vh;
  text-align: left;
  line-height: 1.4;
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
const ChapterLeft = styled.p`
  color: var(--text);
  margin-left: auto;
  margin-right: 0px;
  padding: 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5vh;
  text-align: left;
  line-height: 1.4;
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
  background: white;
`


export default function ChapterContent (props) {
  const [isLeft, setIsLeft] = useState(false)
  useEffect(() => setIsLeft(props.isLeft))
  return (
  <>
    { isLeft 
        ? <ChapterLeft><Text>{props.children}</Text></ChapterLeft> 
        : <ChapterRight><Text>{props.children}</Text></ChapterRight>
    }
  </>
  )
}


