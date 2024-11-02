// The main component that includes routing and renders the other components.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { auth, db } from "./firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/TenantSignUp";
import Dashboard from "./components/Dashboard";
import Explore from "./components/Explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
