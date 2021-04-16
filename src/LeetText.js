import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 90vh;
  width: 90vw;
  max-height: 500px;
  min-height: 500px;
  max-width: 500px;
  //background: #80c565;
  background: #002b55;
  margin: auto;
  padding: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 50px 0px 50px 0px;
  color: white;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  text-align: center;

`
const Title = styled.h1`
  color: #80c565;
  font-size: 13px;
`
const TitleBold = styled.h1`
  color: #80c565;
  font-weight: bold;
`
const Input = styled.textarea`
  border: 3px solid #80c565;
  color: #80c565;
  background: #002b55;
  width: 80%;
  height: 100px;
  padding: 15px;
  border-radius: 20px 0px 0px 20px;
  transition: all 0.1s;
  resize: none;

  scrollbar-color: #002b55;
    ::-webkit-scrollbar {
        width: 9px;
    }
    ::-webkit-scrollbar-track {
        background: #002b55;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #80c565;
        border: 1px solid #80c565;
    }
  
  :focus {
    border: 3px solid #80c565;
    outline: none;
    color: white;
    transform: scale(1.1);
    transition: all 0.2s;
  }
`
const Text = styled.textarea`
  color: white;
  background: #002b55;
  width: 80%;
  height: 80px;
  transition: all 0.1s;
  border: none;
  resize: none;
  :focus {
    outline: none;
  }

  scrollbar-color: #002b55;
    ::-webkit-scrollbar {
        width: 9px;
    }
    ::-webkit-scrollbar-track {
        background: #002b55;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #80c565;
        border: 1px solid #80c565;
    }
`

const CopyButton = styled.button`
  font-size: 20px;
  background: #80c565;
  border: none;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;
  

  :active {
    color: #80c565;
    background: #002b55;
  }

  :focus {
    outline: none;
  }
`

function LeetText() {
  const [rawText, setRawText] = useState('Hi! I am Klemen Lampret.')
  const [leetText, setLeetText] = useState('')
  const copyLeetToClipboard = () => {
    navigator.clipboard.writeText(leetText)
  }
  useEffect(() => {
    let text = rawText
    let leetedText = text.replace(/l/g, '1')
    leetedText = leetedText.replace(/e/g, '3')
    leetedText = leetedText.replace(/t/g, '7')
    setLeetText(leetedText)
  }, [rawText])
  return (
    <Container>
      <TitleBold>1337 TEXT GENERATOR</TitleBold>
      <Title>That's sweet but make it 1337!</Title>
      <h2>boring text here</h2>
      <Input value={rawText} onChange={ evt => setRawText(evt.target.value) } />
      <h2>1337 text there</h2>
      <Text readOnly value={leetText} />
      <CopyButton onClick={copyLeetToClipboard} >copy all 📋</CopyButton>
    </Container>
  );
}

export default LeetText;
