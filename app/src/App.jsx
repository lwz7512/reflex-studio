import React, { useState, useEffect } from 'react';
import {
  Section, Container, Grid, Flexbox, H1, H2, H3, P, Button, Img, Span,
} from "@reflexjs/ui"
import { Ul, Li } from '@reflexjs/components';
import FileSaver from 'file-saver';

import logo from './Reflex-Studio.png';
import { Card, ColorOptions, ThemePreviewer } from './Studio'
import { starters } from './starters'


function App() {


  const [color, setColor] = useState('DEFAULT');
  const [starter, setStarter] = useState('reflex-starter-base');
  const [themePreviewPath, setThemePreviewPath] = useState('favicon.png');

  useEffect(() => {
    // load initial theme image
    let themePath = getThemePath('reflex-starter-base', 'DEFAULT')
    setThemePreviewPath(themePath)
  }, [])


  const getThemePath = (theme, color) => {
    let currentContext = window.location.protocol + "//" + window.location.host
    const themePath = currentContext+'/shots/'+theme+'-'+color+'.png'
    return themePath
  }

  const loadThemePreview = theme => {
    setStarter(theme)
    let themePath = getThemePath(theme, color)
    setThemePreviewPath(themePath)
  }

  const colorChangeHandler = v => {
    setColor(v)
    let themePath = getThemePath(starter, v)
    setThemePreviewPath(themePath)
  }

  // Return the App component.
  return (
    <Section py="1|2|4|6">
      <Container>
        <Grid col="1|2|3" gap="4|6|8" >
          {/* left column */}
          <Flexbox flexDirection="column" 
            alignItems="flex-start" 
            borderRight="1" >
            <Img src={logo} w="80%" />
            <P fontSize="md|l" mt="6" color="#666" w="80%" textAlign="center">
              Dev Experience Matters!
            </P>
            <P fontSize="1rem" width="200" textAlign="center" >@RCL</P>
            {/* use guide */}
            <Ul paddingInlineStart="10">
              <Li>Step 1: Choose primary color</Li>
              <Li>Step 2: Choose theme type</Li>
              <Li>Step 3: Download theme zip file</Li>
              <Li>Step 4: Extract theme zip file</Li>
              <Li>Step 5: Enter theme folder</Li>
              <Li>Step 6: Install dependency</Li>
              <Li>Step 7: Start website with yarn</Li>
            </Ul>
            <P fontSize="sm" p="2" mr="20"
              backgroundColor="#EEE" color="#666"
              borderRadius="4">
              Fore More details, Checkout the README.md in the theme zip file downloaded.
            </P>
          </Flexbox>
          {/* middle column */}
          <Flexbox flexDirection="column" 
            alignItems="flex-start" 
            h="850px"
            overflowY="scroll"
            >
            {/* color picker */}
            <H3 marginBlockStart="8" >Step 1: select color</H3>
            <ColorOptions onChange={colorChangeHandler} />
            <H3>Step 2: select theme</H3>
            {
              starters.map((theme, i) => (
                <Card
                  key={i}
                  title={theme.title}
                  description={theme.description}
                  link={theme.link}
                  screenshot={theme.screenshot}
                  onPreview={loadThemePreview}
                />
              ))
            }
          </Flexbox>
          {/* right column */}
          <Flexbox flexDirection="column" alignItems="flex-start">
            <ThemePreviewer src={themePreviewPath} />
          </Flexbox>
        </Grid>
      </Container>
    </Section>
  );
}

export default App;
