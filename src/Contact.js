import React from 'react'
import styled from 'styled-components'
import Montserrat from './fonts/Montserrat-Regular.ttf'
import MontserratBold from './fonts/Montserrat-Bold.ttf'


const Container = styled.div`
  box-sizing: border-box;
  padding: 50px;
  width: 100%;
  height: fit-content;
  font-family: 'MontserratBold', sans-serif;
`
const ContactLine = styled.div`
  box-sizing: border-box;
  color: var(--secondary);
  font-size: 20px;
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
