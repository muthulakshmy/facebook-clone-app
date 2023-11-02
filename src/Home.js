import { Box, ClickAwayListener,IconButton } from "@mui/material";
import Header from "./pages/Header";
// import HomePage from './pages/Post'
import AddFriends from "./pages/AddFriends";
import Community from "./pages/Community";
import Marketplace from "./pages/Marketplace";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useData } from "./pages/DataContext";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const Home = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  
  const {tabValue, setTabValue, handleTabChange}=useData()

  return (
    <Box sx={{ bgcolor: 'background.default',
    color: 'text.primary',height:"100%"}}>
      
      <Header
        theme={theme.palette.mode}
        colorMode={colorMode.toggleColorMode}
      
 
      />

      <Box sx={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Box>
          {tabValue === 0 && (
            <HomePage 
            bgcolor='background.default'
            color="text.primary"
             
            />
          )}
          {tabValue === 1 && <AddFriends />}
          {tabValue === 2 && <Community />}
          {tabValue === 3 && <Marketplace />}
        </Box>
      </Box>
    </Box>
  );
};


export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}