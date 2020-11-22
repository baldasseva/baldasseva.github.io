import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
      <div style={{height:'100%'}}>
        <Header 
        selectedTab = { selectedTab } 
        setSelectedTab = { setSelectedTab } 
        />
        <Body 
        selectedTab = { selectedTab } 
        />
      </div>
    );
  }
  
  export default App;

  