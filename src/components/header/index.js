import React, {useState, useEffect} from 'react'
import { HeaderContainer, ContainerMenu, Logo, Imagen, Menu, List, ListItem, ListLink } from './HeaderElements'
import LogoImg from '../../images/top-logo.svg';

const Header = () => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, []);
    

  return (
    <>
        <HeaderContainer scrollNav={scrollNav}>
            <ContainerMenu>
                <Logo>
                    <Imagen><img src={LogoImg} alt='Logo'/></Imagen>
                </Logo>
                <Menu>
                    <List>
                        <ListItem>
                            <ListLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={0}>Home</ListLink>
                        </ListItem>
                        <ListItem>
                            <ListLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={0}>About</ListLink>
                        </ListItem>
                        <ListItem>
                            <ListLink to='product' smooth={true} duration={500} spy={true} exact='true' offset={70}>Product</ListLink>
                        </ListItem>
                        <ListItem>
                            <ListLink to='service' smooth={true} duration={500} spy={true} exact='true' offset={60}>Service</ListLink>
                        </ListItem>
                        <ListItem>
                            <ListLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={60}>Contact</ListLink>
                        </ListItem>
                    </List>
                </Menu>
            </ContainerMenu>
        </HeaderContainer>
    </>
  )
}

export default Header
