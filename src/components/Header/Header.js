import React from 'react'
import styled from 'styled-components/macro';
import Logo from 'components/images/logo.png';

import  'components/ToggleSwitch/ToggleSwitch';

export default function Header({isLight, toggleTheme}) {

  return (
    <Wrapper>
    <Nav>
        <Picture src={Logo} alt="" />
    </Nav>
      <div>
        <label className="switch">
            <input 
            onChange={toggleTheme} 
            type="checkbox"
             />
            <span className="slider round"></span>
        </label>
    </div>
    </Wrapper>
  )
}

const Nav = styled.nav`
margin-top: 15px;

`;

const Wrapper = styled.header`
height: 110px;
display: flex;
justify-content: space-between;
padding: 0px 24px;
align-items: Center;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);

`;

const Picture = styled.img`
width: 180px;
`;


