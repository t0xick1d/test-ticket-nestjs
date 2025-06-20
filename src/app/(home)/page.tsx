'use client';
import { Alert } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
   const router = useRouter();

   useEffect(() => {
      const timeout = setTimeout(() => {
         router.back();
      }, 3000);

      return () => clearTimeout(timeout);
   }, [router]);

   return (
      <div>
         <h1>Home</h1>
         <Alert severity="error">This is private page. Redirect back</Alert>
      </div>
   );
}
