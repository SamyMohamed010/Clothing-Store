import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { Product } from '../types';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Plus, Edit, Trash, Settings, Image as ImageIcon } from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, categories } = useProducts();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Cloudinary Config State
  const [cloudName, setCloudName] = useState(localStorage.getItem('cloudinary_cloud_name') || '');
  const [uploadPreset, setUploadPreset] = useState(localStorage.getItem('cloudinary_upload_preset') || '');
  const [isUploading, setIsUploading] = useState(false);

  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '', nameAr: '', price: 0, originalPrice: 0, description: '', descriptionAr: '',
    category: 'shirts', categoryAr: 'قمصان', image: '', sizes: ['M', 'L'], colors: ['أسود'],
    rating: 5, reviews: 0, inStock: true, sale: false, featured: false, newArrival: false
  });

  const saveCloudinaryConfig = () => {
    localStorage.setItem('cloudinary_cloud_name', cloudName);
    localStorage.setItem('cloudinary_upload_preset', uploadPreset);
    alert('تم حفظ إعدادات Cloudinary بنجاح!');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!cloudName || !uploadPreset) {
      alert('يرجى إعداد Cloudinary أولاً من الأسفل (Cloud Name و Upload Preset)');
      return;
    }

    setIsUploading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (result.secure_url) {
        setFormData({ ...formData, image: result.secure_url, images: [result.secure_url] });
        alert('تم رفع الصورة بنجاح!');
      } else {
        alert('حدث خطأ أثناء الرفع: ' + (result.error?.message || 'Unknown error'));
      }
    } catch (error) {
      alert('حدث خطأ في الاتصال');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateProduct(editingId, formData);
      setEditingId(null);
    } else {
      addProduct(formData as Omit<Product, 'id'>);
      setIsAdding(false);
    }
    setFormData({
      name: '', nameAr: '', price: 0, originalPrice: 0, description: '', descriptionAr: '',
      category: 'shirts', categoryAr: 'قمصان', image: '', sizes: ['M', 'L'], colors: ['أسود'],
      rating: 5, reviews: 0, inStock: true, sale: false, featured: false, newArrival: false
    });
  };

  const handleEdit = (product: Product) => {
    setFormData(product);
    setEditingId(product.id);
    setIsAdding(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">لوحة تحكم الإدارة</h1>
        <Button onClick={() => { setIsAdding(!isAdding); setEditingId(null); }}>
          {isAdding ? 'إلغاء' : <><Plus className="ml-2 h-4 w-4" /> إضافة منتج جديد</>}
        </Button>
      </div>

      {/* Cloudinary Setup */}
      <Card className="p-4 mb-8 bg-slate-50 border-blue-200 border">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="text-blue-500" />
          <h2 className="text-lg font-semibold text-blue-900">إعدادات رفع الصور (Cloudinary)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Cloud Name</label>
            <input type="text" value={cloudName} onChange={e => setCloudName(e.target.value)} className="w-full border rounded p-2" placeholder="e.g. dxk123abc" />
          </div>
          <div>
            <label className="block text-sm mb-1">Upload Preset (Unsigned)</label>
            <input type="text" value={uploadPreset} onChange={e => setUploadPreset(e.target.value)} className="w-full border rounded p-2" placeholder="e.g. my_preset" />
          </div>
        </div>
        <Button onClick={saveCloudinaryConfig} className="mt-4 bg-blue-600">حفظ الإعدادات</Button>
      </Card>

      {/* Add / Edit Form */}
      {isAdding && (
        <Card className="p-6 mb-8 border-t-4 border-t-slate-800">
          <h2 className="text-2xl font-bold mb-6">{editingId ? 'تعديل المنتج' : 'إضافة منتج جديد'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">الاسم بالعربية</label>
              <input required type="text" value={formData.nameAr} onChange={e => setFormData({ ...formData, nameAr: e.target.value })} className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">الاسم بالإنجليزية</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full border rounded p-2" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-1">السعر (ج.م)</label>
              <input required type="number" value={formData.price} onChange={e => setFormData({ ...formData, price: Number(e.target.value) })} className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">السعر الأصلي (قبل التخفيض إن وجد)</label>
              <input type="number" value={formData.originalPrice} onChange={e => setFormData({ ...formData, originalPrice: Number(e.target.value) })} className="w-full border rounded p-2" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-1">صورة المنتج</label>
              <div className="flex items-center gap-4 border-2 border-dashed p-4 rounded bg-gray-50">
                <input type="file" accept="image/*" onChange={handleImageUpload} disabled={isUploading} className="flex-1" />
                {isUploading && <span className="text-blue-500 font-bold">جاري الرفع...</span>}
              </div>
              {formData.image && <img src={formData.image} alt="Preview" className="h-32 w-32 object-cover mt-4 rounded shadow" />}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-1">الوصف بالعربية</label>
              <textarea required rows={3} value={formData.descriptionAr} onChange={e => setFormData({ ...formData, descriptionAr: e.target.value })} className="w-full border rounded p-2" />
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.sale} onChange={e => setFormData({ ...formData, sale: e.target.checked })} />
                <Badge variant={formData.sale ? "default" : "outline"} className="bg-red-500">تخفيض / عرض</Badge>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.newArrival} onChange={e => setFormData({ ...formData, newArrival: e.target.checked })} />
                <Badge variant={formData.newArrival ? "default" : "outline"} className="bg-green-500">وصل حديثاً</Badge>
              </label>
            </div>

            <div className="md:col-span-2 mt-4">
              <Button type="submit" className="w-full" size="lg">{editingId ? 'حفظ التعديلات' : 'إضافة المنتج'}</Button>
            </div>
          </form>
        </Card>
      )}

      {/* Products List */}
      <h2 className="text-2xl font-bold mb-4">المنتجات الحالية ({products.length})</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-right border-collapse">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-4">الصورة</th>
              <th className="p-4">الاسم</th>
              <th className="p-4">السعر</th>
              <th className="p-4">الحالة</th>
              <th className="p-4 text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <img src={product.image} alt={product.nameAr} className="w-16 h-16 object-cover rounded shadow-sm" />
                </td>
                <td className="p-4 font-semibold">{product.nameAr}</td>
                <td className="p-4">
                  {product.price} ج.م
                  {product.originalPrice && product.sale && (
                    <span className="block text-xs text-red-500 line-through">{product.originalPrice} ج.م</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1 items-start">
                    {product.sale && <Badge className="bg-red-500">تخفيض</Badge>}
                    {product.newArrival && <Badge className="bg-green-500">جديد</Badge>}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleEdit(product)}>
                      <Edit className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => { if(confirm('تأكيد الحذف؟')) deleteProduct(product.id) }}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
