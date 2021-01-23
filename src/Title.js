import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: white;
  max-width: 80vw;
  margin: auto;
  margin-bottom: 40px;
  font-size: 50px;
  font-weight: black;
  height: fit-content;
  text-align: center;
  text-shadow:  4px 4px var(--highlight),
                -4px -4px var(--secondary);
  padding-top: 60px;
`

export default function Title (props) {
  return (
    <StyledTitle>
    ------------<br></br>
    {props.children}<br></br>
    ------------
</StyledTitle>
  )
}


