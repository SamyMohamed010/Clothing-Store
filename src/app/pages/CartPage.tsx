import React from 'react';
import { Link, useNavigate } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-12 text-center max-w-md">
          <ShoppingBag className="h-24 w-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">سلة التسوق فارغة</h2>
          <p className="text-gray-600 mb-6">لم تقم بإضافة أي منتجات بعد</p>
          <Link to="/shop">
            <Button size="lg">
              <ArrowRight className="ml-2 h-5 w-5" />
              تصفح المنتجات
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">سلة التسوق</h1>
          <p className="text-gray-600">{getCartCount()} منتج في السلة</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <Card key={`${item.product.id}-${item.size}-${item.color}-${index}`} className="p-6">
                <div className="flex gap-4">
                  <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={item.product.image}
                        alt={item.product.nameAr}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-semibold text-lg mb-1 hover:text-slate-700">
                        {item.product.nameAr}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">{item.product.categoryAr}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>المقاس: {item.size}</span>
                      <span>•</span>
                      <span>اللون: {item.color}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="text-lg font-bold"> {(item.product.price * item.quantity).toFixed(2)} ج.م
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center border-2 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                      }
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                      }
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-sm text-gray-600"> {item.product.price.toFixed(2)} ج.م لكل قطعة
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6">ملخص الطلب</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">المجموع الفرعي</span>
                  <span className="font-semibold">{subtotal.toFixed(2)} ج.م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الشحن</span>
                  <span className="font-semibold">{shipping.toFixed(2)} ج.م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الضريبة (10%)</span>
                  <span className="font-semibold">{tax.toFixed(2)} ج.م</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">المجموع الكلي</span>
                  <span className="font-bold text-2xl">{total.toFixed(2)} ج.م</span>
                </div>
              </div>

              <Button
                className="w-full h-12 text-lg mb-3"
                onClick={() => navigate('/checkout')}
              >
                إتمام الطلب
              </Button>

              <Link to="/shop">
                <Button variant="outline" className="w-full">
                  <ArrowRight className="ml-2 h-4 w-4" />
                  متابعة التسوق
                </Button>
              </Link>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">الشحن المجاني</h3>
                <p className="text-sm text-gray-600">
                  احصل على شحن مجاني للطلبات التي تزيد عن $100
                </p>
                {subtotal < 100 && (
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>أضف {(100 - subtotal).toFixed(2)} ج.م للشحن المجاني</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${(subtotal / 100) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
