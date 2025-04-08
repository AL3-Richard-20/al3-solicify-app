import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import WishList from './pages/WishList.jsx'
import Granted from './pages/Granted.jsx'
import Connections from './pages/Connections.jsx'

function App() {

  return (
    ReactDOM.createRoot(root).render(

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/wishlist" element={<WishList />} />

          <Route path="/granted" element={<Granted />} />

          <Route path="/connections" element={<Connections />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>

    )
  )
}

export default App
