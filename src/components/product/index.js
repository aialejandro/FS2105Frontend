import React from 'react';
import Carousel, { CarouselItem } from './carousel.js';

import { ProductContainer, RectanguloGris, RectanguloNaranja, TextContainer,
    Slider, SubTitulo, Titulo, Parrafo } from './ProductElements';

const Product = () => {
  return (
    <>
        <ProductContainer id="product">
            <RectanguloGris/>
            <Slider>
                <Carousel>
                    <CarouselItem></CarouselItem>
                    <CarouselItem></CarouselItem>
                    <CarouselItem></CarouselItem>
                </Carousel>
                <RectanguloNaranja>
                    <TextContainer>
                        <SubTitulo>Sed ut perspiciatis</SubTitulo>
                        <Titulo>Nemo Enim</Titulo>
                        <Parrafo>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</Parrafo>
                    </TextContainer>
                </RectanguloNaranja>
            </Slider>
        </ProductContainer>
    </>
  )
}

export default Product