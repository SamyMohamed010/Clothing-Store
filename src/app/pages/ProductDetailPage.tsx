import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Star, ShoppingCart, Heart, Share2, ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">المنتج غير موجود</h2>
          <Link to="/shop">
            <Button>العودة للمتجر</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('الرجاء اختيار المقاس');
      return;
    }
    if (!selectedColor) {
      toast.error('الرجاء اختيار اللون');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('الرجاء اختيار المقاس واللون');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-gray-500 hover:text-gray-900">الرئيسية</Link>
          <span className="text-gray-400">/</span>
          <Link to="/shop" className="text-gray-500 hover:text-gray-900">المتجر</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">{product.nameAr}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                {product.sale && (
                  <Badge className="absolute top-4 right-4 z-10 bg-red-500">
                    تخفيض {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                  </Badge>
                )}
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.nameAr}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-slate-900' : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.nameAr} - صورة ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.categoryAr}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.nameAr}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} تقييم)
                </span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold">{product.price} ج.م</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through"> {product.originalPrice} ج.م
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">{product.descriptionAr}</p>
            </div>

            <Card className="p-6 space-y-6">
              {/* Size Selection */}
              <div>
                <Label className="text-base mb-3 block">المقاس</Label>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <div key={size}>
                        <RadioGroupItem
                          value={size}
                          id={`size-${size}`}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`size-${size}`}
                          className="flex items-center justify-center h-12 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-slate-900 peer-data-[state=checked]:bg-slate-900 peer-data-[state=checked]:text-white hover:border-slate-400 transition-all"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Color Selection */}
              <div>
                <Label className="text-base mb-3 block">اللون</Label>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color) => (
                      <div key={color}>
                        <RadioGroupItem
                          value={color}
                          id={`color-${color}`}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`color-${color}`}
                          className="flex items-center gap-2 px-4 h-12 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-slate-900 peer-data-[state=checked]:bg-slate-50 hover:border-slate-400 transition-all"
                        >
                          {selectedColor === color && <Check className="h-4 w-4" />}
                          {color}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Quantity */}
              <div>
                <Label className="text-base mb-3 block">الكمية</Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12"
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-12 w-12"
                    >
                      +
                    </Button>
                  </div>
                  {product.inStock ? (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      متوفر في المخزن
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      غير متوفر
                    </Badge>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 h-12"
                >
                  <ShoppingCart className="ml-2 h-5 w-5" />
                  إضافة للسلة
                </Button>
                <Button
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  variant="outline"
                  className="flex-1 h-12"
                >
                  اشتر الآن
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Heart className="ml-2 h-5 w-5" />
                  أضف للمفضلة
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="ml-2 h-5 w-5" />
                  مشاركة
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-16 p-6">
          <Tabs defaultValue="description" dir="rtl">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="description">الوصف</TabsTrigger>
              <TabsTrigger value="details">المواصفات</TabsTrigger>
              <TabsTrigger value="reviews">التقييمات ({product.reviews})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{product.descriptionAr}</p>
                <ul className="mt-4 space-y-2">
                  <li>جودة عالية ومواد فاخرة</li>
                  <li>تصميم عصري ومريح</li>
                  <li>مناسب للاستخدام اليومي</li>
                  <li>سهل العناية والتنظيف</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">المقاسات المتاحة:</span>
                    <span className="font-medium">{product.sizes.join(', ')}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">الألوان المتاحة:</span>
                    <span className="font-medium">{product.colors.join(', ')}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">الفئة:</span>
                    <span className="font-medium">{product.categoryAr}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">الحالة:</span>
                    <span className="font-medium">{product.inStock ? 'متوفر' : 'غير متوفر'}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">التقييم:</span>
                    <span className="font-medium">{product.rating}/5</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">رمز المنتج:</span>
                    <span className="font-medium">#{product.id}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-12 text-gray-500">
                <p>لا توجد تقييمات بعد. كن أول من يقيّم هذا المنتج!</p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6">منتجات ذات صلة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all">
                    <div className="aspect-square relative overflow-hidden">
                      <ImageWithFallback
                        src={relatedProduct.image}
                        alt={relatedProduct.nameAr}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 line-clamp-1">{relatedProduct.nameAr}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">{relatedProduct.price} ج.م</span>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{relatedProduct.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
