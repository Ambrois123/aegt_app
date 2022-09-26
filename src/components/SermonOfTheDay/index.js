import styled from 'styled-components/macro';
import AudioPlayer from '../AudioPlayer/AudioPlayer';


export default function SermonOfTheDay(props) {
    
    const LogoChurch = new URL("../images/Bible.jpg", import.meta.url)
  return (
    <Wrapper>
        <img src={LogoChurch} alt="" />
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>Résumé : {props.description}</p>
        <AudioPlayer />
    </Wrapper>
  )
};

const Wrapper = styled.div`
flex-basis: 350px;
box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
padding: 13px;
padding-bottom: 20px;
background-color: white;
& img {
    width: 60%;
    height: auto;
    align-self: center;
    object-fit: cover;
}
& p {
    font-weight: 200;
    font-size: 12px;
    padding-top: 5px;
    letter-spacing: 1px;
    text-align: justify;
    color: black;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 10px;
}

`;