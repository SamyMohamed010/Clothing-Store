import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { AdminPage } from './pages/AdminPage';
import { LoginPage } from './pages/LoginPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin } = useAuth();
  if (!isAdmin) return <Navigate to="/admin-login" />;
  return <>{children}</>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'shop', Component: ShopPage },
      { path: 'product/:id', Component: ProductDetailPage },
      { path: 'login', Component: LoginPage },
      { path: 'admin-login', Component: AdminLoginPage },
      { path: 'cart', element: <ProtectedRoute><CartPage /></ProtectedRoute> },
      { path: 'checkout', element: <ProtectedRoute><CheckoutPage /></ProtectedRoute> },
      { path: 'order-confirmation', element: <ProtectedRoute><OrderConfirmationPage /></ProtectedRoute> },
      { path: 'admin', element: <AdminRoute><AdminPage /></AdminRoute> },
    ],
  },
]);
