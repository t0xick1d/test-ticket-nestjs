'use server';

import { TicketsI } from '@/types/TicketsInterface';

const baseUrl: string = 'https://keenethics-test-server.onrender.com/api/bicycle/';
export async function getSearchId(): Promise<string> {
   const data = await fetch(`${baseUrl}search`, {
      cache: 'no-store',
   });
   const { searchId } = await data.json();
   return searchId;
}

export async function getTickets(id: string): Promise<[TicketsI]> {
   const data = await fetch(`${baseUrl}tickets/searchId=${id}`, {
      cache: 'no-store',
   });
   return await data.json();
}
