'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import style from './style.module.scss';
import Link from '@mui/material/Link';

const Navigation = () => {
   const params = usePathname();

   const checkActivePath = (path: string) => {
      return params === path ? style.active : '';
   };
   return (
      <nav className={style.linkContainer}>
         <Link className={checkActivePath('/home')} href="/home">
            Home
         </Link>
         <Link className={checkActivePath('/search')} href="/search">
            Search
         </Link>
         <Link className={checkActivePath('/chart')} href="/chart">
            Chart
         </Link>
      </nav>
   );
};
export default Navigation;
