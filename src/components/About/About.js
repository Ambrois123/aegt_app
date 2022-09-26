import styled from 'styled-components'
import React from 'react'
import Title from 'components/Title/index';
import Template from 'components/Template/Template';
import ChurchPartenerTitle from 'components/ChurchPartenerTitle';
import ChurchParteners from 'components/ChurchParteners';
import MotPasteur from 'components/MotPasteur/MotPasteur';
import TitleResp from 'components/TitleResp'


function About() {
  return (
    <Wrapper>
      <Title />
      <Template />
      <TitleResp />
      <MotPasteur />
      <ChurchPartenerTitle />
      <ChurchParteners />
    </Wrapper>
  )
}
const Wrapper = styled.div``;

export default About