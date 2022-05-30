import React, { useState } from 'react';
import { ServicesContainer, Imagen, AccordionWrapper, InternalWrapper, Button, Parrafo } from './ServicesElements';



const Services = ({ title, subTitle, btnText }) => {
    const [ openOne, setOpenOne ] = useState(false);
    const [ openTwo, setOpenTwo ] = useState(false);
    const [ openThree, setOpenThree ] = useState(false);

    const handleClickOne = () => {
        setOpenOne(!openOne);
    };
    const handleClickTwo = () => {
        setOpenTwo(!openTwo);
    };
    const handleClickThree = () => {
        setOpenThree(!openThree);
    };
    
    return (
    <>
        <ServicesContainer id='service'>
            <Imagen/>
            <AccordionWrapper>
                <Button onClick={handleClickOne}>
                    Sed ut perspiciatis1
                </Button>
                <InternalWrapper open={openOne}>
                    <Parrafo>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Parrafo>
                </InternalWrapper>
                
                <Button onClick={handleClickTwo}>
                    Ut enim ad minima veniam
                </Button>
                <InternalWrapper open={openTwo}>
                    <Parrafo>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Parrafo>
                </InternalWrapper>
                
                <Button onClick={handleClickThree}>
                    Sit amet, consectetur, adipisci
                </Button>
                <InternalWrapper open={openThree}>
                    <Parrafo>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Parrafo>
                </InternalWrapper>

            </AccordionWrapper>
        </ServicesContainer>
    </>
  )
};

Services.defaultProps = {
    title    : 'title',
    subTitle : 'subtitle',
    btnText  : 'Read more >>'
};

export default Services