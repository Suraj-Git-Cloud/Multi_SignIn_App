import "./App.css"
import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import LoginUser from "./component/LoginUser";
import HomePage from "./HomePage";
//import ProtectedRoute from "./ProtectedRoute";

function App() {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <LoginUser/>
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            // <ProtectedRoute>
              <HomePage />
            // </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginUser/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>


  )
}

export default App