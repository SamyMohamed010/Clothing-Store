import React from 'react';
import { Link } from 'react-router';
import { ShoppingBag, TrendingUp, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useProducts } from '../context/ProductContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const HomePage: React.FC = () => {
  const { products, categories } = useProducts();
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 3);
  const saleProducts = products.filter((p) => p.sale).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533478784933-5fdbddc8ea7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdWl0JTIwZm9ybWFsJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzgxNjY1MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              مجموعة جديدة من الملابس الرجالية
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              اكتشف أحدث صيحات الموضة للرجال بأفضل الأسعار
            </p>
            <div className="flex gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                  <ShoppingBag className="ml-2 h-5 w-5" />
                  تسوق الآن
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  عرض المنتجات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">تسوق حسب الفئة</h2>
            <p className="text-gray-600">اختر من مجموعة واسعة من الفئات</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/shop?category=${category.id}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.nameAr}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold mb-1">{category.nameAr}</h3>
                    <p className="text-sm text-gray-500">{category.count} منتج</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Star className="ml-1 h-3 w-3" />
              المنتجات المميزة
            </Badge>
            <h2 className="text-3xl font-bold mb-2">الأكثر مبيعاً</h2>
            <p className="text-gray-600">منتجات مختارة بعناية لك</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-square relative overflow-hidden">
                    {product.sale && (
                      <Badge className="absolute top-2 right-2 z-10 bg-red-500">
                        تخفيض
                      </Badge>
                    )}
                    <ImageWithFallback
                      src={product.image}
                      alt={product.nameAr}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 line-clamp-1">{product.nameAr}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.categoryAr}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">{product.price} ج.م</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through"> {product.originalPrice} ج.م
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">
                <TrendingUp className="ml-1 h-3 w-3" />
                وصل حديثاً
              </Badge>
              <h2 className="text-3xl font-bold mb-2">أحدث المنتجات</h2>
              <p className="text-gray-600">كن أول من يحصل على أحدث الإصدارات</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newArrivals.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all">
                    <div className="aspect-square relative overflow-hidden">
                      <Badge className="absolute top-2 right-2 z-10 bg-green-500">
                        جديد
                      </Badge>
                      <ImageWithFallback
                        src={product.image}
                        alt={product.nameAr}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 line-clamp-1">{product.nameAr}</h3>
                      <p className="text-sm text-gray-500 mb-2">{product.categoryAr}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">{product.price} ج.م</span>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sale/Offers Section */}
      {saleProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="destructive" style={{ backgroundColor: 'red' }}>
                <TrendingUp className="ml-1 h-3 w-3" />
                عروض وتخفيضات
              </Badge>
              <h2 className="text-3xl font-bold mb-2">فرص لا تعوض</h2>
              <p className="text-gray-600">تسوق أفضل المنتجات بأقل الأسعار</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {saleProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all border-red-100 border-2">
                    <div className="aspect-square relative overflow-hidden">
                      <Badge className="absolute top-2 right-2 z-10 bg-red-600">
                        تخفيض
                      </Badge>
                      <ImageWithFallback
                        src={product.image}
                        alt={product.nameAr}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 bg-red-50">
                      <h3 className="font-semibold mb-1 line-clamp-1">{product.nameAr}</h3>
                      <p className="text-sm text-gray-500 mb-2">{product.categoryAr}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-red-600">{product.price} ج.م</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through"> {product.originalPrice} ج.م
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
          <p className="text-xl mb-8 text-gray-300">احصل على آخر العروض والتخفيضات</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
            />
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              اشترك
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
