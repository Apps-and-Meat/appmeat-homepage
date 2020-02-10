import React from 'react';  
import sheep from './sheep.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">

      <img src={sheep} alt="logo"/>
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
        
      </header>
    </div>
  );
}

export default App;
