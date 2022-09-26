import WelcomeSermon from 'components/WelcomeSermon';
import styled from 'styled-components'
import React from 'react'
import AudioPlayer1 from 'components/AudioPlayer/AudioPlayer1';
import AudioPlayer2 from 'components/AudioPlayer/AudioPlayer2';
import AudioPlayer3 from 'components/AudioPlayer/AudioPlayer3';
import AudioPlayer4 from 'components/AudioPlayer/AudioPlayer4';
import AudioPlayer5 from 'components/AudioPlayer/AudioPlayer5';
import AudioPlayer6 from 'components/AudioPlayer/AudioPlayer6';
import AudioPlayer7 from 'components/AudioPlayer/AudioPlayer7';
import AudioPlayer8 from 'components/AudioPlayer/AudioPlayer8';




function Sermon() {
    return (
      <Wrapper>
        <WelcomeSermon />
        <Main>
        <AudioPlayer8 />
          <AudioPlayer7 />
          <AudioPlayer6 />
          <AudioPlayer5 />
          <AudioPlayer4 />
          <AudioPlayer3 />
          <AudioPlayer2 />
          <AudioPlayer1/>
        </Main>
        
        
      </Wrapper>
    )
  
}

const Wrapper = styled.div`

`;
const Main = styled.div`
display: grid;
padding: 3em;
grid-gap: 1.2em;
margin: auto;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

@media(max-width: 576px){
  
}
@media(max-width: 768px){
  
}
@media(max-width: 992px){}
 @media(max-width: 1200px){
  }
`;



export default Sermon