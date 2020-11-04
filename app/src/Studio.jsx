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
import { Radio, Label } from 'theme-ui'



export const ColorOptions = ({onChange}) => {
  const colors = [
    {name: 'DEFAULT', color: '#06f'},
    {name: 'RED',     color: '#f44336'},
    {name: 'PINK',    color: '#e91e63'},
    {name: 'PURPLE',  color: '#9c27b0'},
    {name: 'INDIGO',  color: '#3f51b5'},
    {name: 'BLUE',    color: '#2196f3'},
    {name: 'CYAN',    color: '#00bcd4'},
    {name: 'GREEN',   color: '#4caf50'},
    {name: 'LIME',    color: '#cddc39'},
    {name: 'YELLOW',  color: '#ffeb3b'},
    {name: 'ORANGE',  color: '#ff9800'},
    {name: 'BROWN',   color: '#795548'},
    {name: 'BLUGREY', color: '#607d8b'}
  ]

  const [options, setOptions] = useState(colors);
  const [colorType, setColorType] = useState('DEFAULT');

  const optionChangeHandler = evt => {
    setColorType(evt.currentTarget.value)
    if(onChange) onChange(evt.currentTarget.value)
  }

  return (
    <>
      {
        options.map((c, i) => (
          <Label key={i} style={{borderBottom:'1px solid #EEE', marginBottom: 10}} >
              <Radio
                name='color-mode'
                value={c.name}
                checked={colorType == c.name}
                onChange={optionChangeHandler}
              />
              <Span w="6" h="6" bg={c.color} mr="4" ></Span>{c.name}
            </Label>
        ))
      }
    </>
  )
}

export const Card = ({ image, title, description, link, screenshot, onPreview, ...props }) => {

  const [dnlding, setDnlding] = useState(false);
  // const [preview, setPreview] = useState(screenshot);

  const displayPreview = () => {
    if(onPreview) onPreview(link)
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
