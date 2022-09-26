import styled from 'styled-components/macro';
import SermonOfTheDay from '../SermonOfTheDay'


export default function SermonCard() {
  return (
    <Wrapper>
        <Grid>
            <SermonOfTheDay 
                title="La bienveillance de Dieu"
                date= "Culte du 29-05-22"
                description="Il est intéressant de noter comment Dieu a été 
                bienveillant envers Agar l'esclave."
            />            
        </Grid>
    </Wrapper>
  )
};

const Wrapper = styled.div`
margin-top: 20px;
`;

const Grid = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
Margin: auto;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
padding-bottom: 10px;
`;
