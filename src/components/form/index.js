import React, { useState } from 'react';
import { Contacto, FormContainer, Titulo, SubTitulo, Formulario, Imagen, Label, Input, Button } from './FormElements';
import { RectanguloGris } from '../product/ProductElements';
import ContactImg from '../../images/contact-image.png';

const Index = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://sd-1059464-h00024.ferozo.net/backend/", {
      mode: 'no-cors',
      method: 'POST',
      body: `name=${name.replace(" ","%20")}&email=${email.replace(" ","%20")}&phone=${phone.replace(" ","%20")}&message=${message.replace(" ","%20")}`,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => console.log(response));
    if (response.ok) {
      alert(`Gracias por contactarnos ${name}!`)
    } else {
      alert(`Error al enviar: ${response.status}`)
    }
    
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  const onChangeName = (event) => {
    setName(event.target.value);
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const onChangePhone = (event) => {
    setPhone(event.target.value);
  }
  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  return (
    <>
      <Contacto id="contact">
      <RectanguloGris/>
        <FormContainer>
          <Formulario onSubmit={handleSubmit}>
            <Titulo>Get in touch</Titulo>
            <SubTitulo>We are hiring!</SubTitulo>
            <Label>Name</Label>
            <Input name="asunto" type="text" value={name} onChange={onChangeName}></Input>
            <Label>Email</Label>
            <Input name="email" type="email" value={email} onChange={onChangeEmail}></Input>
            <Label>Phone</Label>
            <Input name="telefono" type="phone" value={phone} onChange={onChangePhone}></Input>
            <Label>Message</Label>
            <Input name="mensaje" type="text" value={message} onChange={onChangeMessage}></Input>
            <Button type="submit">Send</Button>
          </Formulario>
        </FormContainer>
        <Imagen>
          <img src={ContactImg} alt='Logo'/>
        </Imagen>
      </Contacto>
    </>
  )
}

export default Index