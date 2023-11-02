import "./App.css";
import { useState } from "react";
import { DataProvider } from "./pages/DataContext";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./Error";
import Home from "./Home";
import Profilepage from "./pages/Components/Profilepage";
import Feed from "./pages/Components/Feed";
import Saved from "./pages/Components/Saved";
import ProfileFriends from "./pages/Components/ProfileFriends"
import AddFriends from "./pages/AddFriends";
function App() {

  
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Error />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/saved" element={<Saved />} />
          <Route path ="/friendList" element={<ProfileFriends />} />
          {/* <Route path="friendRequest" elemet={<AddFriends />} /> */}
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
