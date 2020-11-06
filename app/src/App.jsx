import React, { useState, useEffect } from 'react';
import {
  Section, Container, Grid, Flexbox, H1, H2, H3, P, Button, Img, Span,
} from "@reflexjs/ui"
import { Ul, Li } from '@reflexjs/components';
import FileSaver from 'file-saver';

import logo from './Reflex-Studio.png';
import { Card, ColorOptions } from './Studio'
import { starters } from './starters'


function App() {

  const staticContext = 'http://localhost:3000'
  const themePath = staticContext+'/shots/reflex-starter-base-DEFAULT.png'

  const [color, setColor] = useState('DEFAULT');
  const [starter, setStarter] = useState('reflex-starter-base');
  const [themePreviewPath, setThemePreviewPath] = useState(themePath);


  const loadThemePreview = theme => {
    setStarter(theme)
    setThemePreviewPath(staticContext+'/shots/'+theme+'-'+color+'.png')
  }

  const colorChangeHandler = v => {
    setColor(v)
    setThemePreviewPath(staticContext+'/shots/'+starter+'-'+v+'.png')
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
            <Img src={themePreviewPath} w="full" />
          </Flexbox>
        </Grid>
      </Container>
    </Section>
  );
}

export default App;
