import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
    const [selectedTab, setSelectedTab] = useState(1);
    console.log("selected tab: " + selectedTab);
    return (
      <div>
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

  