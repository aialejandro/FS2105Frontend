import styled from 'styled-components';
import ServiceImg from '../../images/section4-image.png';

export const ServicesContainer = styled.div`
    position: relative;
    width: 100%;
    height: 768px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
`;

export const Imagen = styled.div`
    position: absolute;
    width: 56%;
    right:0px;
    height: 768px;
    background: url(${ServiceImg});
    z-index: 1;
`;

export const AccordionWrapper = styled.div`
    position: absolute;
    display: flex;
    left: 7%;
    top: 25%;
    flex-direction: column;
    justify-content: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E3E3E3;
    border-radius: 4px 4px 0px 0px;
    opacity: 1;
    width: 48%;
    height: auto;
    text-align: center;
    transition: all 0.6s ease-in-out;
    z-index: 5;
`;

export const InternalWrapper = styled.div`
    width: 100%;
    max-height: ${(props) => (props.open ? '200px' : '0')};
    transition: all 0.6s ease-in-out;
    overflow: hidden;
`;

export const Button = styled.button`
    text-align: left;
    font: normal normal medium 16px/21px Roboto;
    font-weight: 600;
    padding: 3%;
    letter-spacing: 0.22px;
    color: #5F6368;
    opacity: 1;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    border: 1px solid #E3E3E3;
    border-radius: 4px 4px 0px 0px;
`;

export const Parrafo = styled.p`
    text-align: left;
    font: normal normal normal 16px/28px Roboto;
    letter-spacing: 0.22px;
    color: #5F6368;
    opacity: 1;
    margin: 3%;
`;

