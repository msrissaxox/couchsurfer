// The main component that includes routing and renders the other components.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { auth, db } from "./firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import TenantSignUp from "./components/TenantSignUp";
import CommunitySignUp from "./components/CommunitySignUp";
import HostSignUp from "./components/HostSignUp";

import Dashboard from "./components/Dashboard";
import Explore from "./components/Explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/communitysignup" element={<CommunitySignUp />} />
        <Route path="/hostsignup" element={<HostSignUp />} />
        <Route path="/tenantsignup" element={<TenantSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
