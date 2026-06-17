import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Category } from '../types';
import { products as initialProducts, categories } from '../data/products';
import { db } from '../lib/firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { toast } from 'sonner';

interface ProductContextType {
  products: Product[];
  categories: Category[];
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    if (!db) {
      setProductsList(initialProducts);
      return;
    }

    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const prods: Product[] = [];
      snapshot.forEach((doc) => {
        prods.push({ id: doc.id, ...doc.data() } as Product);
      });
      // If db is empty, maybe initialize with mock data? Let's keep it empty or use initial
      if (prods.length === 0) {
        setProductsList(initialProducts); // fallback for UI testing
      } else {
        setProductsList(prods);
      }
    }, (error) => {
      console.error("Firestore error:", error);
      setProductsList(initialProducts);
    });

    return () => unsubscribe();
  }, []);

  const addProduct = async (product: Omit<Product, 'id'>) => {
    if (!db) {
      toast.error('قاعدة البيانات غير متصلة');
      return;
    }
    try {
      await addDoc(collection(db, 'products'), product);
      toast.success('تم إضافة المنتج لقاعدة البيانات');
    } catch (e) {
      toast.error('حدث خطأ أثناء الإضافة');
    }
  };

  const updateProduct = async (id: string, updates: Partial<Product>) => {
    if (!db) return;
    try {
      await updateDoc(doc(db, 'products', id), updates);
      toast.success('تم تحديث المنتج');
    } catch (e) {
      toast.error('حدث خطأ أثناء التحديث');
    }
  };

  const deleteProduct = async (id: string) => {
    if (!db) return;
    try {
      await deleteDoc(doc(db, 'products', id));
      toast.success('تم حذف المنتج');
    } catch (e) {
      toast.error('حدث خطأ أثناء الحذف');
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: productsList,
        categories,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
