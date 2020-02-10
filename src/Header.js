import React from 'react';  
import sheep from './sheep.svg';
import './App.css';
import styled from 'styled-components';


const Button = styled.button`
  display: inline-block;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none; //2px solid white;
  border-radius: 3px;
  background: none;
  font-size: calc(30px);

  `;

const BackgroundDiv = styled.div`
    display: flex;
    flexDirection: horizontal;
    background-color: #282c34;
    padding: 30px;
`;


function Header({setSelectedTab, selectedTab}) {

  return (
    <BackgroundDiv> 
        <Button onClick= {() => setSelectedTab(0)}> <img src={sheep} alt="logo" width='120px'  height='120px'/> </Button> 
        <Button onClick= {() => setSelectedTab(1)}> Swift UI Blog </Button> 
        <Button onClick= {() => setSelectedTab(2)}> Hire me </Button>

    </BackgroundDiv>
  );
}

export default Header;