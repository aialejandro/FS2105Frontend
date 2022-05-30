import React from 'react'
import { FooterContainer, Copyright, Imagen } from './FooterElements'
import LogoImg from '../../images/footer-logo.svg';

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <Copyright>2020 © All rights reserved.</Copyright>
            <Imagen><img src={LogoImg} alt='Logo'/></Imagen>
        </FooterContainer>
    </>
  )
}

export default Footer