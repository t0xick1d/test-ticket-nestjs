'use client';
import { ChangeEvent, useState, useEffect } from 'react';
import { getTickets, getSearchId } from './action';

import { CountTransplants, Filter, Spinner, TicketsList } from '@/components';

import style from './styles.module.scss';
import { TicketsI, TransplantsI } from '@/types/TicketsInterface';

const Search = () => {
   const [alignment, setAlignment] = useState<string>('cheap');
   const [isLoading, setLoading] = useState<boolean>(true);
   const [transplants, setTransplants] = useState<TransplantsI>({
      all: true,
      noneTransplants: false,
      oneTransplants: false,
      twoTransplants: false,
      threeTransplants: false,
   });
   const [tickets, setTickets] = useState<[TicketsI] | []>([]);
   useEffect(() => {
      const fetchUsers = async () => {
         setLoading(true);
         const searchId = await getSearchId();
         const ticketsFetch = await getTickets(searchId);
         setTickets(ticketsFetch);
         setLoading(false);
      };
      fetchUsers();
   }, []);

   const handleChange = (e: React.MouseEvent<HTMLElement>, newAlignment: string) => {
      setAlignment(newAlignment);
   };
   const transplantsChange = (event: ChangeEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      setTransplants({
         ...transplants,
         [target.name]: target.checked,
      });
   };
   return (
      <div className={style.App}>
         <section className={style.mainContainer}>
            <CountTransplants transplants={transplants} setTransplants={transplantsChange} />
            <div className={style.containerList}>
               <Filter alignment={alignment} handleChange={handleChange} />
               {isLoading ? (
                  <Spinner />
               ) : (
                  <TicketsList
                     list={tickets ? tickets : []}
                     alignment={alignment}
                     transplants={transplants}
                  />
               )}
            </div>
         </section>
      </div>
   );
};

export default Search;
