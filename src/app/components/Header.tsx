import React from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            شحن مجاني للطلبات التي تزيد عن 100 ج.م ⭐
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex-shrink-0">
            <span className="text-slate-900">STYLE</span>
            <span className="text-slate-500">MEN</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="ابحث عن المنتجات..."
                className="pr-10"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="hover:text-slate-600 transition-colors">
              الرئيسية
            </Link>
            <Link to="/shop" className="hover:text-slate-600 transition-colors">
              المتجر
            </Link>
            <Link to="/shop?category=shirts" className="hover:text-slate-600 transition-colors">
              قمصان
            </Link>
            <Link to="/shop?category=tshirts" className="hover:text-slate-600 transition-colors">
              تيشيرتات
            </Link>
            <Link to="/shop?category=jeans" className="hover:text-slate-600 transition-colors">
              جينز
            </Link>
            <Link to="/admin" className="hover:text-blue-600 font-bold text-blue-800 transition-colors">
              الإدارة
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="ابحث عن المنتجات..."
              className="pr-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
