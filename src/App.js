import { useState } from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Search from './components/SearchComponent';
import SideMenu from './components/SideMenuComponent';

function App() {

  const [receivedData, setReceivedData] = useState("");
  const handleData = stringToSearch => {
    setReceivedData(stringToSearch);
  };

  return (
    <div className="App d-flex flex-row">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home searchString={receivedData}/>
      <div className='vertical-divider'></div>
      <Search handleData={handleData}/>
    </div>
  );
}

export default App;
