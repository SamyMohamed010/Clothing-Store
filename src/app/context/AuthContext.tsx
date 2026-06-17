import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged, User } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  adminLogin: (username: string, pass: string) => boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('is_admin') === 'true';
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google', error);
      throw error;
    }
  };

  const adminLogin = (username: string, pass: string) => {
    if (username === 'AbdoSamy' && pass === 'abdo1234') {
      setIsAdmin(true);
      localStorage.setItem('is_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      setIsAdmin(false);
      localStorage.removeItem('is_admin');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signInWithGoogle, adminLogin, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
