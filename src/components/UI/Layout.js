import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle';
import lightTheme from "../themes/light.json"
import darkTheme from "../themes/dark.json"
import { useState } from 'react';
import Header from 'components/Header/Header'
import Footer from 'components/Footer';
import Navbar from 'components/Header/Navbar';



export default function Layout({children}) {
    const [isLight, setIsLight] = useState(true);
    const toggleTheme = () =>{
        setIsLight(!isLight);
    }

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <Wrapper>
            <GlobalStyle />
            <Header isLight={isLight} toggleTheme={toggleTheme}/>
            {/* <div>
              <label className="switch">
                  <input 
                  onChange={toggleTheme} 
                  type="checkbox"
                  />
                  <span className="slider round"></span>
              </label>
          </div> */}
            <Navbar />
              <Main>
                {children}
              </Main>
            <Footer />
        </Wrapper>
    </ThemeProvider>
    
  )
}

const Wrapper = styled.div``;

const Main = styled.div`
${'' /* min-height: calc(100vh-150px); */}
width: 100%;
max-width: 1240px;
margin: auto;

`;
