import { Box, Typography } from '@mui/material';
import './App.css';
import Header from './pages/Header';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AddFriends from './pages/AddFriends';
import Community from './pages/Community';
import Sidebar from './pages/Sidebar/Sidebar';
import RightSidebar from './pages/RightSidebar';
import Marketplace from './pages/Marketplace';

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box>
      <Header tabValue={tabValue} setTabValue={setTabValue} handleTabChange={handleTabChange} />
      {/* <HomePage /> */}
      {/* <CreatePost /> */}
      <Box sx={{display:"flex",height:"100vh",overflowX:"hidden",overflowY:"auto",}}>
        <Box >
        {/* <Sidebar /> */}

        </Box>
        <Box>
        {tabValue === 0 && <HomePage />} 
      {tabValue === 1 && <AddFriends />} 
      {tabValue === 2 && <Community />}
      {tabValue === 3 && <Marketplace />}

        </Box>
     
      <Box>
      {/* <RightSidebar /> */}

      </Box>

     
      </Box>
      
    </Box>
  );
}

export default App;
