/**
 * studeo components
 * @2020/11/01
 */
import React, { useState } from 'react'
import FileSaver from 'file-saver';
import { 
  Button, Container, Grid, Section, Img,
  H1, H2, P, Strong, Div, Span, Figure, A,
} from "@reflexjs/components"


export const Card = ({ image, title, description, link, screenshot, onPreview, ...props }) => {

  const [dnlding, setDnlding] = useState(false);
  // const [preview, setPreview] = useState(screenshot);

  const displayPreview = () => {
    // console.log(screenshot)
    if(onPreview) onPreview(screenshot)
  }

  const downloadZip = () => {
    // console.log('>>> to fetch zip ...')
    setDnlding(true)
    
    const data = {
      starter : link,
    }

    fetch('/starter.zip', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.blob()).then(function(blob) {
      FileSaver.saveAs(blob, `${link}.zip`)
      setDnlding(false)
    });

  }


  return (
    <A
      d="flex"
      w="90%"
      flexDirection="column"
      textAlign="center"
      rounded="lg"
      borderWidth="2px"
      p="2"
      mb="2"
      color="text"
      hoverColor="text"
      hoverTransform="translateY(-4px)"
      hoverBoxShadow="2xl"
      transition="all .15s ease-in"
      {...props}
    >
      <Div py="2|3|4">
        <H2 m="0" fontSize="3xl">
          {title}
        </H2>
        <P fontSize="xl">{description}</P>
        
        <Button as="button" mr="4"
          {...(dnlding?{disabled:true, variant: 'accent'}:{variant: 'primary'})}
          onClick={downloadZip}
          >
          {dnlding ? 'Generating...' : 'Download' }
        </Button>
        <Button as="button" color="#ffffff" bg="#1d953f"
          onClick={displayPreview}>
          Preview
        </Button>
      </Div>
    </A>
  )

}
