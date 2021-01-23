import React from 'react'
import styled, {keyframes, createGlobalStyle} from 'styled-components'
import ChapterTitle from './ChapterTitle.js'
import ChapterContent from './ChapterContent.js'
import Title from './Title.js'
import Header from './Header.js'
import story from './story.js'
import Flags from './Flags.js'
import ScrollSign from './ScrollSign.js'
import Contact from './Contact.js'


import Montserrat from './fonts/Montserrat-Regular.ttf'
import MontserratBold from './fonts/Montserrat-Bold.ttf'

import { ReactComponent as Image1 } from './images/klemen_1.svg'
import { ReactComponent as Image2 } from './images/klemen_2.svg'
import { ReactComponent as Image3 } from './images/klemen_3.svg'
import { ReactComponent as Image4 } from './images/klemen_4.svg'
import { ReactComponent as Image5 } from './images/klemen_5.svg'
import { ReactComponent as Image6 } from './images/klemen_6.svg'
import { ReactComponent as Image7 } from './images/klemen_7.svg'
import { ReactComponent as Image8 } from './images/klemen_8.svg'
import { ReactComponent as MasterTitle } from './images/MasterTitle.svg'


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat});
  }
  :root {
    --text: #444444;
    --secondary: #002B55;
    --highlight: #80C565;
  }
  html {
    width: 100vw;
    overflow-x: hidden;

  }
  body {
    background: var(--secondary);
    position: relative;
    width: 100vw;
    height: fit-content;
    font-family:  'sans-serif';
  }
`
const comeInAnimation = keyframes`
 0% {  width: 0px; }
 100% { width: 100%; }
`
const MiddleBackground = styled.div`
  height: 100%;
  margin: auto;
  background: white;
`
const StyledImage = styled.div`
  margin: auto;
`
const StyledMasterTitle = styled.div`
  margin: auto;
  animation-name: ${comeInAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
  height: 75vw;
  max-height: 600px;
`
const Higlight = styled.span`
  color: var(--secondary);
`
const Spacer = styled.div`
  height: 50vh;
`

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Spacer />
      <ScrollSign />
      <StyledMasterTitle>
        <MasterTitle  style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', paddingBottom: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
      </StyledMasterTitle>
      <Flags />
      <MiddleBackground>
        {/*}<Chapter01 lang={'slo'}/>
        {*/}
        <StyledImage>
          <Image1  style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '40px', display: 'block', height: 'auto', width: '90%', maxWidth: '800px'}}/>
        </StyledImage>
        <ChapterTitle>
          {story.SLO.titles[1]}
        </ChapterTitle>
        <ChapterContent>
          Ko sem bil mali skuštranec, nekaj let star, sem na zasnežen poznonovembski dan v izložbi trgovine opazil nekaj neverjetno vznemirljivega. Za steklom se je bleščal LEGO set rumenih programirljivih robotkov.<br/>
        <StyledImage>
          <Image2 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        </StyledImage>
         Domišljija mi je nemudoma prevzela vse vizualne kapacitete. Videl sem že kako bom naredil svojega robota, svoj leteč avto, potoval na druge planete, rešil svet pred invazijo modrih nezemljanov. Neskončno možnosti. <br/><br/>Bližal se je že Miklavž in seveda so bile te legice edina stvar za katero sem ga prosil. Šah mat, Miklavž ♞. In tako se je začelo.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[2]}
        </ChapterTitle>
        <Image3  style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        <ChapterContent>
          Več let kasneje, polnih hroščkastih robotkov iz legic, polnih elektronskih setov za otroke, polnih naskrivaj razstavljenih in nespretno za silo nazaj sestavljenih radijev, televizij in ostale tehnike, ki so si je starši želeli delujoče, se je pri uri likovne vzgoje na mojem super kul MP4 playerju znašel komad od U2 - Beautiful Day. <br/><br/>Naježile so se mi kocine. To je to. To je glasba, ki premika gore. Takrat sem začutil, da bom roker (ja, ta komad se mi je zdel skoraj kot hard rock). Poprijel sem za materino kitaro in iz nje vsak dan izvabljal neposlušljiv hrup. Prsti so postali spretnejši, možgančki hitrejši, budget pa je ostal blizu nič. Vsakič, ko nekaj hočem, se bogsigavedizakaj spravim to narediti sam. Ampak kako se pa sploh sestavi ojačevalce in efekte? Tega še ne znam. Kaj storiti? Nič lažjega.<br/><br/>Vpisal sem se na srednjo elektrotehniško, Vegovo. 
        <Image4  style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
          <br/><br/>Bil sem poln upanja, da bom po prvih dneh že vihtel nevidne sile strel in vdahnil življenje v dotlej nepremične mašine. Kmalu sem spoznal, da temu ne bo tako.<br/><br/>Tam me niso učili delati ojačevalcev in efektov. So me pa naučili spajkati, brati datasheete in osnovne koncepte. Ravno dovolj, da sem se lahko obrti izdelovanja svoje glasne opreme lotil sam. Delal sem 100 vatne ojačevalnike, pa ojačevalnike v piksnah od barve, v škatlicah od bombonov, iz starih radijev, mini vgradljive ojačevalce, vglavnem cel kup ojačevalcev, pa sintesizerje, binarne ure, lightshowe ... Ampak kaj pa roboti? Procesorji? Kaj pa vesoljske ladje? Ne tega pa nisem znal.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[3]}
        </ChapterTitle>
    <ChapterContent>
      Zdi se, da so me v življenju naključni nepovezani trenutki usmerjali na pot programiranja.<br/><br/>Tako je v četrtem letniku, je prfesor vprašal, če bi se kdo prijavil na tekmovanje v programirjanju mikrokrmilnikov. Pogledal sem levo, vsi so povešali pogled. Pogledal sem še desno in nazaj. Isto. Pogledal sem kolega na levi, in je nesigurno skomignil. Pa sva se javila.<br/><br/> Z neverjetnimi izkušnjami ene dvajsetih vrstic v c-ju in in brez plana. Pa je šlo. Poprosil sem prijatelja z računalniške smeri, če bi mi razkril svet te čudežne obrti. Tako se je tisto popoldne za mizo v guinnessu moje življenje spremenilo. Pokazal mi je osnove c-ja, in že sem prižigal lučke, bral senzorje in knofke, pisal driverje za zaslončke in premikal tuljavice.<br/><br/> 
      <Image5 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/><br/><br/>
      S sošocem sva si naredila svojo plošcico s krmilnikom, si napisala knjižnjice, prešpricala vse možne ure sociologije in se odpravila na tekmovanje. Bila sva druga. Ali pa tretja. Ne vem, in ne da se mi iskati plakete. Vsekakor pa nama je precej uspelo.<br/><br/>Začutil sem, da ja. Programiranje je to.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[4]}
        </ChapterTitle>
        <ChapterContent>
      Vseeno sem se vpisal na Eletrotehniško fakulteto. Ne vem zakaj. Verjetno se mi je zdela edina logična poteza. Edini predmet, ki sem ga kdajkoli dobil 10 je bil programiranje 1, kjer smo imeli osnove web developmenta... to se mi zdi, da pove nekaj. \n\n Po prvem letniku, po praksi v kolektorju, mi je mentor predlagal, da naj pošljem prošnjo v Kolektor Idrium. To je bila precej kul skupina študentov, kjer smo izdelovali naprave, za notranjo uporabo. Večinoma so bili to zaganjalniki motorjev, merilne naprave, krmilniki za to in ono. Ampak kmalu sem se začel dolgočasiti. Rabil sem nekaj več. Svoje naprave sem rabil bolj ... žive.',
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[5]}
        </ChapterTitle>
        <Image6 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        <ChapterContent>
          Potem pa je končno na vrsto prišel precej kul projekt, s super dogočasnim imenom: "Varilni izvor inverterski", sam sem ga poimenoval "RoboVarilc2000".      Šlo je za mašino s serijo pnevmatskih ventilov in dveh varilnih glav, ki so se prožili po sekvenci ki jo je nastavil uporabnik na touch panelu. <br/><br/>      Avtomatizirana mašina, GUI, kako bi lahko ne prosil, če smem prevzeti ta projekt? Tresočega glasu sem rekel: "Jurko. A bi lahko tega jaz prevzel?". "Lahko," je rekel "Ampak zna biti veliko dela." Končno. Končno nekaj kul. Zakopal sem se. Nadobudno sem se lotil na tem krmilniku iz zgodnjih 2000 poustvariti Material design, ki je bil takrat all the rage, seveda more moja mašina lepo izgledati. <br/><br/> Stvar mi je uspela. Robot? Ja. Kul? Ja. V prototipni delavnici še danes veselo piha in vari.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[6]}
        </ChapterTitle>
        <Image7 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        <ChapterContent>
  Takrat mi je končno dokončno kapnilo, da če hočem delati res kul stvari, je moja najboljša možnost programiranje. Tako sem nekaj mesecev kasneje nervozen  poslal prošnjo v Kolektor Vision, kjer se ukvarjajo z robotskim vidom za industrijo. <br/><br/>Tam sem se učil procesiranja slik, razmišljanja, če sem res pomislil na vse edge case. Ugotovil sem da je Linux precej fajn, da mi je VIM všeč in da je C++ grozen za uporabo. Na faksu je tudi postajalo bolj zanimivo. Kjer se je le dalo sem izbiral projekte bolj softwarske narave, kot so barvanje črnobelih slik z nevronskimi mrežami, risanje VR grafov, segmentacijo elementov, kul stvari.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[7]}
        </ChapterTitle>
        <ChapterContent>
  Svojo študentsko službo sem v iskanju finančne neodvisnosti in denarja za vsaj občasno pijačo s kolegi zamenjal za programerja v videoprodukcijski hiši. Tu so mi pustili, da si sam izbiram tehnologije, ki jih bom uporabljal. <br/><br/>Vedel sem že, da se hočem lotiti bolj web tehnologij, da hočem imeti več opravka z grafičnimi vmesniki, in da hočem, da se moji programčki pogovarjajo in delujejo v harmoniji med sabo in z ostalim svetom. Tu sem napisal svoje prve frontende v Reactu, svoje prve serverčke v Nodu, avtomatiziral snemanje precej produkcij, napisal in uporabljal APIje, releasal prve internetne strani in ogromno drugih drobnarij. Sedaj lahko moje pridne delavce najdete živeče polno integrirane v praktično vseh VPK produkcijah.
        </ChapterContent>
        <Image8 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', height: 'auto', width: '300px'}}/>
        <ChapterTitle>
          {story.SLO.titles[8]}
        </ChapterTitle>
        <ChapterContent>
          Sedaj pa si želim naprej. <br/><br/>In naprej ne morem sam. Okoli sebe rabim druge ustvarjalce, druge ljudi, ki konceptom podarjajo življenja in smisel, od katerih lahko pobiram dobre prakse, učinkovite pristope, izkušnje in znanje. Nekaj časa je to šlo z branjem knjig in člankov predlaganih na hacker news, sedaj pa se mi zdi da se je moj napredek resno upočasnil, in nisem take vrste človek, ki bi lahko to mirno gledal.  <br/><br/>Kar lahko ponudim v zameno je ogromno entuziazma, večji del svojega življenja in svoje omejene izkušnje.  <br/><br/>Kaj praviš? Bi lahko bil del naslednjega poglavja?
        </ChapterContent>
        <Contact />
      </MiddleBackground>
    </div>
    
  )
}

export default App
