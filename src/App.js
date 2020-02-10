import React, { useState } from 'react';  
import sheep from './sheep.svg';
import Header  from "./Header"
import styled from 'styled-components';


import './App.css';

function App() {

  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <div className="App">
              <Header selectedTab= {selectedTab} setSelectedTab= {setSelectedTab}/>
      <header className="App-header">
      { selectedTab === 0 ? <StartPage/> : null}
      
      
      
      </header>
    </div>
  );
}

function StartPage() {
  const Page = styled.div`
  background-color: #282c34;
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  `;

  return (
        <Page>
          <img src={sheep} alt="logo" />
        <a
          className="App-link"
          href="https://se.linkedin.com/in/karlsoderberg?trk=profile-badge"
          target="_blank"
          color="white"
          rel="noopener noreferrer"
        >
          No meat here yet.
          Go vegetarian and hire me for iOS development
        </a>
        </Page>
  );
}

export default App;
