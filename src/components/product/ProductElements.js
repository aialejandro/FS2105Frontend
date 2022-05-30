import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 768px;
    background: #F2F4F1 0% 0% no-repeat padding-box;
`;

export const RectanguloGris = styled.div`
    display: flex;
    position: absolute;
    width: 30%;
    height: 100%;
    right: 0px;
    background: #DCE1DA 0% 0% no-repeat padding-box;
    z-index: 5;
`;

export const Slider = styled.div`
    display: flex;
    position: absolute;
    margin-left: 15%;
    margin-top: 10%;
    width: 70%;
    height: 70%;
    z-index: 10;
`;

export const RectanguloNaranja = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 50%;
    height: 50%;
    background: #E0752F 0% 0% no-repeat padding-box;
    z-index: 15;
`;

export const TextContainer = styled.div`
    position: relative;
    width: 75%;
    margin: auto;
    margin-top: 10%;
`;

export const SubTitulo = styled.h3`
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 16px;
`;

export const Titulo = styled.h3`
     
    font-weight: 300;
    font-weight: 600;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-size: 35px;
`;

export const Parrafo = styled.div`
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px; 
    font-weight: 0;
    margin-top: 20px;
`;