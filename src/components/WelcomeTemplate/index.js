import styled from 'styled-components/macro';
import WordWelcome from '../WordWelcome';




export default function GridTemplate() {
  return (
    <Wrapper>
        <WordWelcome />
    </Wrapper>
  )
};

const Wrapper = styled.div`
display: grid;
width: 80%;
min-height: 150px;
margin: auto;
grid-template-columns: 1fr;
padding: 24px;
row-gap: 20px;
@media(min-width: 1400px){
  min-height: 120px;
}
`;

