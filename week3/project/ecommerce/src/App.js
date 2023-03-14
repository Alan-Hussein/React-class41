import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import ProductDetail from './Components/productDetails';
import Favorites from './Components/favorites';
import { FavoriteContextProvider } from './context/Favoritescontex';
function App() {


  return (
    <div className="App">
      <FavoriteContextProvider>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>

      </FavoriteContextProvider>

    </div>
  );
}

export default App;