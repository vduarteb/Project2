import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = styled.nav`
    align-items: stretch;
    background-color: var(--gray-light-4);
    border-bottom: solid 1px var(--gray-light-2);
    display: flex;
    flex-shrink: 0;
    height: 40px;
`;

const HomeLink = styled(NavLink)`
    margin-left: 30px;
`;

const Logo = styled.div`
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 150px;
`;

const LinkContainer = styled.div`
    align-items: right;
    display: flex;
    margin-left: auto;
    margin-right: 30px;
`;

const StyledNavLink = styled(NavLink)`
    align-items: center;
    color: var(--gray);
    display: flex;
    font-size: 14px;
    letter-spacing: 1px;
    margin-right: 30px;
    position: relative;
    text-decoration: none;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        color: var(--gray-dark-2);
    }

    &.active {
        color: var(--primary);
    }

    &.active::after {
        background: var(--primary);
        bottom: -1px;
        content: '';
        height: 2px;
        left: 5%;
        position: absolute;
        width: 90%;
    }
`;

function NavigationBar() {
    return (
        <Navbar>
            <HomeLink exact to='/home'>
                <Logo />
            </HomeLink>
            <LinkContainer>
                <StyledNavLink exact to='/foster-houses'>Refugios</StyledNavLink>
                <StyledNavLink exact to='/all-pets'>Mascotas</StyledNavLink>
                <StyledNavLink exact to='/favorites'>Favoritos</StyledNavLink>
                <StyledNavLink exact to='/shopping-cart'>Carrito</StyledNavLink>
                <StyledNavLink exact to='/create-pet'>Crear</StyledNavLink>
            </LinkContainer>
        </Navbar>
    );
}

export default NavigationBar;