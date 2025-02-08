// src/components/AuthGuard.tsx
"use client";

import Cookies from "js-cookie";
import { useEffect, } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const storedUser = Cookies.get("user");
  const storedToken = Cookies.get("token");
  const router = useRouter();
  

  useEffect(() => {
    if(!storedToken&&!storedUser){
      router.push("/")
    }
  }, [storedToken,storedUser,router]);

  

  return <>{children}</>;
}
