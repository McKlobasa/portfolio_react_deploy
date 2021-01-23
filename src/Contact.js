import React from 'react'
import styled from 'styled-components'
import Montserrat from './fonts/Montserrat-Regular.ttf'
import MontserratBold from './fonts/Montserrat-Bold.ttf'


const Container = styled.div`
  padding: 50px;
  width: 100vw;
  height: fit-content;
  font-family: 'MontserratBold', sans-serif;
  display: flex;
  justify-content: center;
`
const ContactLine = styled.span`
  flex: 1;
  color: var(--secondary);
  font-size: 28px;
  font-weight: bold;
  padding: 30px;
`

export default function Contact (props) {
  return (
    <Container>
      <ContactLine>+386 07 569 669</ContactLine>
      <ContactLine>kl.lampret@gmail.com</ContactLine>
    </Container>
  )
}
