import React from 'react';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from './components/figma/ThemeProvider';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import { router } from './routes';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
