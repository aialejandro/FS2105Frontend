import styled from 'styled-components';

export const Contacto = styled.div`
    display: flex;
    position: relative;
    left: 0px;
    width: 100%;
    height: 768px;
    background: #F2F4F1 0% 0% no-repeat padding-box;
`;

export const FormContainer = styled.div`
    display: flex;
    position: relative;
    width: 50%;
`;

export const Formulario = styled.form`
    position: relative;
    align-items: center;
    width: 75%;
    margin: auto;
`;

export const Imagen = styled.div`
    position: relative;
    margin: auto;
    width: 50%;
    z-index:10;
`;

export const Titulo = styled.h3`
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 39px;
    color: #343434;
`;

export const SubTitulo = styled.h3`
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 39px;
    color: #E0752F;
    margin-bottom: 10%;
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    color: #5F6368;
    font-weight: 600;   
`;

export const Input = styled.input`
    position: relative;
    width: 100%;
    height: 33px;
    background: none;
    outline: 0;
    border: 0;
    border-bottom: 2px solid rgb(200, 200, 200);
    margin-block: 8px;
    color: #5F6368;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
`;

export const Button = styled.button`
    position: relative;
    width: 144px;
    height: 48px;
    margin-top: 30px;
    background: #E0752F 0% 0% no-repeat padding-box;
    border-radius: 25px;
    text-decoration: none;
    border: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
`;


