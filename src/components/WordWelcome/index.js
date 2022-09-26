import styled from 'styled-components/macro';



export default function WordWelcome() {
  return(
    <Wrapper>
        Bienvenue sur le site de l'Assemblée Chrétienne 
        de la Grâce de Toulouse.
    </Wrapper>
  )
};

const Wrapper = styled.h3`
  border-radius: 5px;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 25px;
  font-size: 1.4rem;
  line-height : 1.5;
  font-weight: 400;
  @media(max-width: 576px){
    font-size: 1.2rem;
  }
  @media(max-width: 768px){
    font-size: 1.2rem;
  }
  @media(max-width: 992px){
    font-size: 1.4rem;
  }
  @media(max-width: 1200px){}
  @media(max-width: 1400px){}
  




`;

