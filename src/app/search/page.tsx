'use client';
import { ChangeEvent, useState } from 'react';
import style from './styles.module.scss';

export default function Search() {
   const [alignment, setAlignment] = useState('cheap');
   const [transplants, setTransplants] = useState({
      all: true,
      noneTransplants: false,
      oneTransplants: false,
      twoTransplants: false,
      threeTransplants: false,
   });
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
   <div className={style.App}>
      <section className={style.mainContainer}>
         {/* <CountTransplants transplants={transplants} setTransplants={transplantsChange} /> */}
         <div className={style.containerList}>
            {/* <Filter alignment={alignment} handleChange={handleChange} /> */}
            {/* <TicketsList
               list={ticket.data ? ticket.data : []}
               alignment={alignment}
               transplants={transplants}
            /> */}
         </div>
      </section>
   </div>;
}
