import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: 96px;
    z-index: 20;
    background: ${({ scrollNav }) => (scrollNav ? '#E0752F' : 'transparent')};
    transition: all 0.6s ease-in-out;
`;

export const ContainerMenu = styled.div`
    display: flex;
    position: relative;
    margin: auto;
    width: 100%;
`;

export const Logo = styled.div`
    display: flex;
    position: relative;
    margin-left: 7.32%;
`;

export const Imagen = styled.div`
    display: flex;
    position: relative;
`;

export const Menu = styled.div`
    display: flex;
    position: relative;
    margin-left: 40%;
`;

export const List = styled.ul`
    display: flex;
    position: relative;
    justify-content: space-between;
`;

export const ListItem = styled.li`
    display: flex;
    position: relative;
    margin-left: 15%;
`;

export const ListLink = styled(LinkS)`
    text-decoration: none;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-roboto);
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #FFF;
    }
`;

