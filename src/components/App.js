import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Main from "./Main";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import Store from "./Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        //After finish add to main.js
        <Route path="/store" element={<Store />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </BrowserRouter>
  );
}
export default App;