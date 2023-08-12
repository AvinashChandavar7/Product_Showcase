import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ProductDetails, ProductList } from './components';
import { PreLoader } from './utils';


const App = () => {
  return (

    <>
      <PreLoader />

      <Routes>
        <Route path="/" element={<ProductList />} exact />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App