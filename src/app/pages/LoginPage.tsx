import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { LogIn } from 'lucide-react';
import { toast } from 'sonner';

export const LoginPage: React.FC = () => {
  const { signInWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/cart');
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('تم تسجيل الدخول بنجاح!');
      navigate('/cart');
    } catch (error) {
      toast.error('حدث خطأ أثناء تسجيل الدخول');
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[70vh]">
      <Card className="w-full max-w-md p-8 text-center border-2 border-gray-100 shadow-xl">
        <div className="mb-8">
          <LogIn className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl font-bold mb-2">تسجيل الدخول</h1>
          <p className="text-gray-500">يجب تسجيل الدخول باستخدام حساب جوجل لإتمام عملية الشراء</p>
        </div>
        
        <Button 
          onClick={handleLogin} 
          className="w-full text-lg py-6 flex items-center justify-center gap-3 bg-white text-gray-800 border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
          تسجيل الدخول باستخدام جوجل
        </Button>
      </Card>
    </div>
  );
};
