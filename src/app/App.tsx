import React from 'react';
import { RouterProvider } from 'react-router';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import { router } from './routes';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
