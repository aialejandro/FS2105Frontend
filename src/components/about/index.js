import React from 'react';
import { AboutContainer, Rectangulo, TextContainer, Titulo, SubTitulo, Parrafo } from './AboutElements';

const About = () => {
  return (
    <>
      <AboutContainer id="about">
          <Rectangulo></Rectangulo>
          <TextContainer>
            <Titulo>We Help Businesses</Titulo>
            <SubTitulo>Grow and Innovate</SubTitulo>
            <Parrafo>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Parrafo>
          </TextContainer>
      </AboutContainer>
    </>
  )
}

export default About