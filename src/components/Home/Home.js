import React from 'react'
import Slideshow from 'components/Slide/Slideshow';
import WelcomeTemplate from 'components/WelcomeTemplate'
import ChurchPartenerTitle from 'components/ChurchPartenerTitle';
import ChurchParteners from 'components/ChurchParteners';
import Programme from 'components/Programme/Programme';


function Home() {
  return (
    <div>
      <Slideshow />
      <WelcomeTemplate />
      <Programme />
      <ChurchPartenerTitle />
      <ChurchParteners />
    </div>
  )
}

export default Home