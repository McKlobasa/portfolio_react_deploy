import React, { useState } from 'react'
import styled, {keyframes, createGlobalStyle} from 'styled-components'
import ChapterTitle from './ChapterTitle.js'
import ChapterContent from './ChapterContent.js'
import Title from './Title.js'
import Header from './Header.js'
import story from './story.js'
import Flags from './Flags.js'
import ScrollSign from './ScrollSign.js'
import Contact from './Contact.js'
import Tldr from './Tldr.js'
import { Chapter01, Chapter02, Chapter03,
         Chapter04, Chapter05, Chapter06,
         Chapter07, Chapter08, Chapter09,
         Chapter10, Chapter11 } from './SloContent.js'


import Montserrat from './fonts/Montserrat-Regular.ttf'
import MontserratBold from './fonts/Montserrat-Bold.ttf'

import { ReactComponent as Image0 } from './images/klemen_0.svg'
import { ReactComponent as Image1 } from './images/klemen_1.svg'
import { ReactComponent as Image2 } from './images/klemen_2.svg'
import { ReactComponent as Image3 } from './images/klemen_3.svg'
import { ReactComponent as Image4 } from './images/klemen_4.svg'
import { ReactComponent as Image5 } from './images/klemen_5.svg'
import { ReactComponent as Image6 } from './images/klemen_6.svg'
import { ReactComponent as Image7 } from './images/klemen_7.svg'
import { ReactComponent as Image8 } from './images/klemen_8.svg'
import { ReactComponent as MasterTitle } from './images/MasterTitle.svg'
import { ReactComponent as SpacerMelon } from './images/spacer.svg'
import LeetText from './LeetText'


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat});
  }
  :root {
    --text: #444444;
    --secondary: #004122;
    --highlight: #ED3E3E;
  }
  html {
    width: 100vw;
    overflow-x: hidden;

  }
  body {
    background: var(--secondary);
    background: repeating-linear-gradient(
      65deg,
      #004122,
      #004122 50px,
      #67B260 50px,
      #67B260 100px
    );
    position: relative;
    width: 100vw;
    height: fit-content;
    font-family:  'sans-serif';
    overflow-x: hidden;
  }
`
const comeInAnimation = keyframes`
 0% {  transform: Scale(80%) }
 100% { transform: Scale(100%) }
`
const MiddleBackground = styled.div`
  height: 100%;
  margin: auto;
  background: white;
`
const StyledImage = styled.div`
  margin: auto;
`
const Higlight = styled.span`
  color: var(--secondary);
`
const Spacer = styled.div`
  height: 50vh;
`
const wing1Anim = keyframes`
  0% {
    transform-origin: 75%;
    -webkit-transform: RotateY(0deg);
       -moz-transform: RotateY(0deg);
        -ms-transform: RotateY(0deg);
         -o-transform: RotateY(0deg);
    transform: RotateY(0deg);
  }
  20% {
    transform-origin: 75%;
    transform: RotateY(70deg);
    -webkit-transform: RotateY(70deg);
       -moz-transform: RotateY(70deg);
        -ms-transform: RotateY(70deg);
         -o-transform: RotateY(70deg);
  }
  70% {
    transform-origin: 75%;
    transform: RotateY(0deg);
    -webkit-transform: RotateY(0deg);
       -moz-transform: RotateY(0deg);
        -ms-transform: RotateY(0deg);
         -o-transform: RotateY(0deg);
  }
`;
const wing2Anim = keyframes`
  0% {
    transform-origin: 68%;
    transform: RotateY(0deg);
    -webkit-transform: RotateY(0deg);
       -moz-transform: RotateY(0deg);
        -ms-transform: RotateY(0deg);
         -o-transform: RotateY(0deg);
  }
  20% {
    transform-origin: 68%;
    transform: RotateY(-70deg);
    -webkit-transform: RotateY(-70deg);
       -moz-transform: RotateY(-70deg);
        -ms-transform: RotateY(-70deg);
         -o-transform: RotateY(-70deg);
  }
  70% {
    transform-origin: 68%;
    transform: RotateY(0deg);
    -webkit-transform: RotateY(0deg);
       -moz-transform: RotateY(0deg);
        -ms-transform: RotateY(0deg);
         -o-transform: RotateY(0deg);
  }
`;
const watermelonFly = keyframes`
  0% {
    transform: TranslateY(5%);
    -webkit-transform: TranslateY(5%);
       -moz-transform: TranslateY(5%);
        -ms-transform: TranslateY(5%);
         -o-transform: TranslateY(5%);
  }
  20% {
    transform: TranslateY(0%);
    -webkit-transform: TranslateY(0%);
       -moz-transform: TranslateY(0%);
        -ms-transform: TranslateY(0%);
         -o-transform: TranslateY(0%);
  }
  100% {
    transform: TranslateY(5%);
    -webkit-transform: TranslateY(5%);
       -moz-transform: TranslateY(5%);
        -ms-transform: TranslateY(5%);
         -o-transform: TranslateY(5%);
  }
`;
const AnimatedMasterTitle = styled(MasterTitle)`
  margin-left: auto; 
  margin-right: auto; 
  padding-top: 40px; 
  padding-bottom: 40px; 
  display: block; 
  height: auto; 
  width: 70vw; 
  max-width: 1900px;
  .watermelon {
    animation: ${watermelonFly} infinite 2.5s ease-out; 
  }
  .wing1 {
    animation: ${wing1Anim} infinite 2.5s ease-out; 
  }
  .wing2 {
    animation: ${wing2Anim} infinite 2.5s ease-out; 
  }
`
const StyledMasterTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  animation-name: ${comeInAnimation};
  animation-fill-mode: forwards;
  animation-duration: 2s;
  animation-iteration-count: 1;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

`
function App(props) {
  const [lang, setLang] = useState('SLO')
  return (
    <div>
      <GlobalStyle />
      <StyledMasterTitle>
        <AnimatedMasterTitle />
      </StyledMasterTitle>
      <Flags setLang={setLang}/>
      <MiddleBackground>
        <StyledImage>
          {lang == 'SLO' ? 
          <Image1  style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/> :
          <Image0  style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/> 
          }
        </StyledImage>
        <Tldr />
        <ChapterTitle>
          {lang == 'SLO'
            ? story.SLO.titles[1]
            : story.SLO.titlesENG[1]
          }
        </ChapterTitle>
        <ChapterContent>
          <Chapter01 lang={lang}/>
        <StyledImage>
          <Image2 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        </StyledImage>
          <Chapter02 lang={lang}/>
        </ChapterContent>
        <SpacerMelon style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
        <ChapterTitle>
          {lang == 'SLO'
            ? story.SLO.titles[2]
            : story.SLO.titlesENG[2]
          }
        </ChapterTitle>
        <Image3  style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        <ChapterContent>
          <Chapter03 lang={lang}/>
          <Image4  style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
          <Chapter04 lang={lang}/>
        </ChapterContent>
        <SpacerMelon style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
        <ChapterTitle>
          {lang == 'SLO'
            ? story.SLO.titles[3]
            : story.SLO.titlesENG[3]
          }
        </ChapterTitle>
        <ChapterContent>
          <Chapter05 lang={lang}/>
              <Image5 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
              <Chapter06 lang={lang}/>
        </ChapterContent>
        <ChapterTitle>
          {lang == 'SLO'
            ? story.SLO.titles[4]
            : story.SLO.titlesENG[4]
          }
        </ChapterTitle>
        <ChapterContent>
          <Chapter07 lang={lang}/>
        </ChapterContent>
        <SpacerMelon style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
        <ChapterTitle>
          {lang == 'SLO'
            ? story.SLO.titles[5]
            : story.SLO.titlesENG[5]
          }
        </ChapterTitle>
        <Image6 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        <ChapterContent>
          <Chapter08 lang={lang}/>
        </ChapterContent>
        <SpacerMelon style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
        <ChapterTitle>
          {lang == 'SLO'
            ? story.SLO.titles[6]
            : story.SLO.titlesENG[6]
          }
        </ChapterTitle>
        <Image7 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        <ChapterContent>
          <Chapter09 lang={lang}/>
        </ChapterContent>
        <SpacerMelon style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
        <ChapterTitle>
          {lang == 'SLO'
            ? story.SLO.titles[7]
            : story.SLO.titlesENG[7]
          }
        </ChapterTitle>
        <ChapterContent>
          <Chapter10 lang={lang}/>
        </ChapterContent>
        <Image8 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        <SpacerMelon style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
        <ChapterTitle>
          {lang == 'SLO'
            ? story.SLO.titles[8]
            : story.SLO.titlesENG[8]
          }
        </ChapterTitle>
        <ChapterContent>
          <Chapter11 lang={lang}/>
        </ChapterContent>
        <SpacerMelon style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
        <Contact />
      </MiddleBackground>
    </div>
    
  )
}

export default App
