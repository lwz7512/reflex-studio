import React, { useState, useEffect } from 'react';
import {
  Section, Container, Grid, Flexbox, H1, P, Button, Img,
} from "@reflexjs/ui"

import FileSaver from 'file-saver';
import logo from './Reflex-Studio.png';

function App() {

  // Create the count state.
  const [count, setCount] = useState(0);
  const [dnlding, setDnlding] = useState(false);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  const downloadZip = () => {
    // console.log('>>> to fetch zip ...')
    setDnlding(true)
    
    fetch('/starter.zip').then(function(response) {
      return response.blob();
    }).then(function(blob) {
      FileSaver.saveAs(blob, "reflex-starter.zip")
      setDnlding(false)
    });
  }


  // Return the App component.
  return (
    <Section py="8|12|16|24">
      <Container>
        <Grid col="1|2" gap="8|12|16" alignItems="center">
          <Flexbox flexDirection="column" alignItems="center"  >
            <Img src={logo} w="full" />
            <P fontSize="xl|2xl" mt="2">
              Dev Experience Matters!
            </P>
            <Button as="button"
              {...(dnlding?{disabled:true, variant: 'accent'}:{variant: 'primary'})}
              >
              {dnlding ? 'Generate starter...' : 'Download Starter' }
            </Button>
          </Flexbox>
          <H1 m="0" fontWeight="black" lineHeight="tight">
             TODO ... 
          </H1>
        </Grid>
      </Container>
    </Section>
  );
}

export default App;
