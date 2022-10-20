import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Cart from "./Cart";
import Main from "./Main";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import Store from "./Store";
import Boutiques from "./Boutiques";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Main />} >
            <Route path="" element={<Boutiques/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        //After finish add to main.js
        <Route path="/store" element={<Store />} />
        <Route path="/" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
