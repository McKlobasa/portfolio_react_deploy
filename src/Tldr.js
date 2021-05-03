import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const StyledTldr = styled.div`
  margin: 0px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 0px;
  align-content: center;
  height: fit-content;
  min-height: 100px;
`
const Container = styled.div`
  box-sizing: border-box;
  font-family: Montserrat;
  background: var(--secondary);
  width: 100%;
  height: fit-content;
  padding: 30px;
  color: white;
  line-height: 1.7;
`
const buttonAnimation = keyframes`
 0% { transform: Scale(1.2) }
 50% { transform: Scale(1.0) }
 100% { transform: Scale(1.2) }
`
const Green = styled.span `
  background: var(--highlight);
  font-weight: bold;
  color: white;
  padding: 6px;
  margin: 3px;
  border-radius: 0px 9px 0px 9px;
`
const Orange = styled.span `
  background: #FFAA55;
  font-weight: bold;
  color: white;
  padding: 6px;
  margin: 3px;
  border-radius: 0px 9px 0px 9px;
`
const TldrButton = styled.button`
position: relative;
  margin: 0 auto;
  height: 50px;
  width: 30vw;
  font-size: 4vmin;
  border: none;
  background: ${ props => props.active ? 'var(--highlight)' : 'var(--secondary)' };
  color: white;
  //nimation-name: ${buttonAnimation};
  animation-timing-function: ease;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-play-state: ${ props => props.active ? 'paused' : 'running' };
  &:after {
    content:"";
    position:absolute;
    height:0;
    width:0;
    left:100%;
    top:0;
    border:25px solid transparent;
    border-left: 25px solid ${ props => props.active ? 'var(--highlight)' : 'var(--secondary)' };
  }

  :focus {
    outline: none;
  }

`
const NoShowButton = styled.button`
  height: 100%;
  width: 100vw;
  background: none;
  border: none;
  :focus {
    outline: none;
  }
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: 0;
  left: 0;
`
const Contents = props => <Container>
<Green>+38670 569 669</Green>
<Green>kl.lampret@gmail.com</Green>
<br /><br />  
<Green>JS</Green>- I use it on most of my projects. I’ve read You Don’t Know JS, so I know a thing or two.
<br /><br />  
<Green>NODE</Green>- I’ve written a lot of Express servers and used it extensively for automation of productions at VPK.
<br /><br />  
<Green>REACT</Green>- I use it daily, yet there is room for improvement.
<br /><br />  
<Green>ELECTRON</Green>- I mainly use my modified React boilerplate.
<br /><br />  
<Green>BASH</Green>- I use it pretty much all the time, mostly on begginer level.
<br /><br />  
<Green>REGEX</Green>- Not a begginer, not yet an expert.
<br /><br />  
<Green>GIT</Green>- Altough I have a grasp of fundamentals, I don’t commit as often as i should.
<br /><br />  
<Green>VIM</Green>- It may not belong on this list, but I love it and use it religiously.
<br /><br />  
<Orange>C++</Orange>- I used it in Kolektor Vision along with OpenCV. Lately I prefer Rust.
<br /><br />  
<Orange>C#</Orange>- I use it for some legacy projects at VPK.
<br /><br />  
<Orange>RUST</Orange>- I’ve written some simple stuff like serial signal interface for communication with scoreboards. Would like to use it more.
<br /><br />  
<Orange>Python</Orange>- I’ve used  it often at uni. Now I always choose JS over it.

</Container>


const Tldr = props => {
  const [contentsShown, setContentsShown] = useState(false)
  return (
    <StyledTldr>
      <TldrButton active={contentsShown} onClick={() => setContentsShown(!contentsShown)}>{contentsShown ? 'hide specs' : 'show specs'}
        <NoShowButton onClick={() => setContentsShown(!contentsShown)}></NoShowButton>
      </TldrButton>
      { contentsShown ? <Contents /> : '' }
    </ StyledTldr>
  )
}


export default Tldr
