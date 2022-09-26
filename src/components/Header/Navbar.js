import React from 'react'
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
  return (
    <Nav>
          <Link to='/'>
            <Menu isCurrentPage={location.pathname === "/"} >Accueil</Menu>
          </Link>
          <Link to='/About'>
            <Menu isCurrentPage={location.pathname === "/"}>Qui sommes-nous ?</Menu>
          </Link>
          <Link to='/Sermon'>
            <Menu isCurrentPage={location.pathname === "/"}>Sermons</Menu>
          </Link>
          <Link to='/Contact'>
            <Menu isCurrentPage={location.pathname === "/"}>Contact</Menu>
          </Link>
    </Nav>
  )
}

const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
height: 2.3rem;
width: 100%;
& a{
  text-decoration: none;
  color: #e76f51;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
& p:hover{
  ${'' /* font-size: 18px;
  color: goldenrod;
  transition: linear 0.25s
} */}
@media(max-width: 390px){
    font-size: 12px;
}

`;

const Menu = styled.p`
text-decoration: none;
  color: #e76f51;
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
  display: inline;
p:hover{
  ${'' /* font-size: 21px;
  color: goldenrod;
  transition: linear 0.25s */}
}
@media(max-width: 390px){
    font-size: 12px;
}

`;

export default Navbar