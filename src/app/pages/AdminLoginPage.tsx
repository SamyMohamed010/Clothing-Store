import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

export const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { adminLogin, isAdmin } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(username, password)) {
      toast.success('تم تسجيل الدخول للإدارة بنجاح!');
      navigate('/admin');
    } else {
      toast.error('بيانات الدخول غير صحيحة');
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[70vh]">
      <Card className="w-full max-w-md p-8 shadow-xl border-t-4 border-t-primary">
        <div className="text-center mb-8">
          <ShieldCheck className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-2xl font-bold mb-2">لوحة الإدارة المحمية</h1>
          <p className="text-gray-500">خاص بمديري الموقع فقط</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-right">
            <Label htmlFor="username">اسم المستخدم</Label>
            <Input 
              id="username" 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="text-left"
              dir="ltr"
            />
          </div>
          
          <div className="space-y-2 text-right">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-left"
              dir="ltr"
            />
          </div>
          
          <Button type="submit" className="w-full text-lg py-6">
            دخول للإدارة
          </Button>
        </form>
      </Card>
    </div>
  );
};
