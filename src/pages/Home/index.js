import React, { useState } from 'react';
import Main from './components/Main';
import Projects from './components/Projects';

const Home = () => {
  
  const [currentState, setCurrentState] = useState(1);
  
  return (
    <>
      {
        currentState == 1 ? <Main setCurrentState={setCurrentState}/> :
        currentState == 2 ? <Projects setCurrentState={setCurrentState} /> :
        null 
      }
    </>
  )
}

export default Home;