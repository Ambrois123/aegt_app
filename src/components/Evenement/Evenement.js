import Programme from 'components/Programme/Programme';
import React from 'react'
import styled from 'styled-components'

function Evenement() {
  return (
    <Wrapper>
    <Para></Para>
        <Main>
            <Programme />
        </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin-top: 20px;
width: 80%;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 20px;
`;

const Main= styled.div`
display: grid;
width: 80%;
min-height: 100px;
margin: auto;
grid-template-columns: 1fr 1fr;
gri-template-rows: 1fr 1fr 1fr;
padding: 24px;
row-gap: 20px;
@media(max-width:992px){
    grid-template-columns: 1fr;
}
`;

const Para= styled.p`
text-decoration: underline;
font-weight: bold;
font-size: 20px;
text-align: justify;


`;

export default Evenement