import React from 'react';
import { Link } from 'react-router';
import { CheckCircle, Package, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export const OrderConfirmationPage: React.FC = () => {
  const orderNumber = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold mb-4">تم تأكيد طلبك!</h1>
          <p className="text-xl text-gray-600 mb-8">
            شكراً لك على الشراء من متجرنا
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-right">
              <div>
                <p className="text-sm text-gray-600 mb-1">رقم الطلب</p>
                <p className="text-lg font-bold">{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">التوصيل المتوقع</p>
                <p className="text-lg font-bold">
                  {estimatedDelivery.toLocaleDateString('ar-SA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg text-right">
              <Package className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">تتبع طلبك</h3>
                <p className="text-sm text-gray-600">
                  سنرسل لك بريداً إلكترونياً يحتوي على رابط لتتبع الشحنة فور شحن طلبك
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg text-right">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">تأكيد الطلب</h3>
                <p className="text-sm text-gray-600">
                  تم إرسال تأكيد الطلب إلى بريدك الإلكتروني مع جميع التفاصيل
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="ml-2 h-5 w-5" />
                العودة للمتجر
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                الصفحة الرئيسية
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            إذا كان لديك أي استفسار، لا تتردد في{' '}
            <Link to="/" className="text-slate-900 font-semibold hover:underline">
              التواصل معنا
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};
