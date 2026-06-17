import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { CreditCard, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Separator } from '../components/ui/separator';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getCartTotal();
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success('تم إتمام الطلب بنجاح!');
      navigate('/order-confirmation');
    }, 2000);
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">إتمام الطلب</h1>
          <p className="text-gray-600">املأ البيانات لإكمال عملية الشراء</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Truck className="h-5 w-5" />
                  <h2 className="text-xl font-bold">معلومات الشحن</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">الاسم الأخير *</Label>
                    <Input id="lastName" required />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="phone">رقم الهاتف *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address">العنوان *</Label>
                    <Input id="address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">المدينة *</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">الرمز البريدي *</Label>
                    <Input id="zipCode" required />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="country">الدولة *</Label>
                    <Input id="country" required />
                  </div>
                </div>
              </Card>

              {/* Payment Method */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="h-5 w-5" />
                  <h2 className="text-xl font-bold">طريقة الدفع</h2>
                </div>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 space-x-reverse border-2 rounded-lg p-4 cursor-pointer hover:bg-gray-50 data-[state=checked]:border-slate-900">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">بطاقة ائتمان / خصم</div>
                            <div className="text-sm text-gray-500">Visa, Mastercard, Amex</div>
                          </div>
                          <CreditCard className="h-6 w-6 text-gray-400" />
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 space-x-reverse border-2 rounded-lg p-4 cursor-pointer hover:bg-gray-50 data-[state=checked]:border-slate-900">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex-1 cursor-pointer">
                        <div className="font-semibold">الدفع عند الاستلام</div>
                        <div className="text-sm text-gray-500">ادفع نقداً عند استلام الطلب</div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">رقم البطاقة *</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">تاريخ الانتهاء *</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input id="cvv" placeholder="123" maxLength={3} required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">الاسم على البطاقة *</Label>
                      <Input id="cardName" required />
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <h2 className="text-2xl font-bold mb-6">ملخص الطلب</h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div key={`${item.product.id}-${item.size}-${item.color}-${index}`} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.product.nameAr} × {item.quantity}
                      </span>
                      <span className="font-semibold"> {(item.product.price * item.quantity).toFixed(2)} ج.م
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">المجموع الفرعي</span>
                    <span className="font-semibold">{subtotal.toFixed(2)} ج.م</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">الشحن</span>
                    <span className="font-semibold">{shipping.toFixed(2)} ج.م</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">الضريبة</span>
                    <span className="font-semibold">{tax.toFixed(2)} ج.م</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">المجموع الكلي</span>
                    <span className="font-bold text-2xl">{total.toFixed(2)} ج.م</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <span className="ml-2">جاري المعالجة...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="ml-2 h-5 w-5" />
                      تأكيد الطلب
                    </>
                  )}
                </Button>

                <div className="mt-4 p-4 bg-green-50 rounded-lg text-sm">
                  <p className="text-green-800">
                    ✓ الدفع الآمن والمشفر
                    <br />
                    ✓ إمكانية الإرجاع خلال 30 يوم
                    <br />✓ شحن سريع ومضمون
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
