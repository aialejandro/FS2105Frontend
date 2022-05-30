import styled from 'styled-components';
import SliderImg from '../../images/slider-1.png';

export const CoverContainer = styled.div`
    display: flex;
    width: 100%;
    height: 768px;
    background: url(${SliderImg}) fixed 50%;
    background-size: cover; 
`;

export const Text = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 7.3%;
    width: 100%;
`;

export const Title = styled.h1`
    position: relative;
    width: 43%;
    font-size: 48px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    @media screen and (max-width: 430px) {
        width: 100%;
    }
`;

export const SubTitle = styled.h3`
    position: relative;
    width: 343px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-top: 30px;
    font-weight: 200;
`;

export const Button = styled.button`
    position: relative;
    margin-top: 53px;
    width: 144px;
    height: 48px;
    border-radius: 25px;
    background: #E0752F 0% 0% no-repeat padding-box;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
`;

