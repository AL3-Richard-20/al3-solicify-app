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
import NewWishList from './pages/NewWishList.jsx'
import Collections from './pages/Collections.jsx'
import CollectionItems from './pages/CollectionItems.jsx'
import WishlistItemInfo from './pages/WishlistItemInfo.jsx'

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

          <Route path="/newwishlist" element={<NewWishList />} />

          <Route path="/collections" element={<Collections />} />

          <Route path="/collectionitems" element={<CollectionItems />} />

          <Route path="/iteminfo" element={<WishlistItemInfo />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>

    )
  )
}

export default App
