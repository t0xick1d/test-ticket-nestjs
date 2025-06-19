import React from 'react';
import Item from './Item';
import style from './style.module.scss';
import { Grid, Box, Card } from '@mui/material';
import { TicketsI, TransplantsI } from '../../types/TicketsInterface';
import { filterTransplants } from '@/utils/ticketsUtils/ticketsUtils';
interface MyComponentProps {
   list: TicketsI[];
   transplants: TransplantsI;
   alignment: string;
}

const TicketsList: React.FC<MyComponentProps> = ({ list, transplants, alignment }) => {
   const itemsCopy = list.filter((e) => filterTransplants(transplants, e));
   if (alignment === 'cheap') {
      itemsCopy.sort((a: TicketsI, b: TicketsI) => a.price - b.price);
   }
   if (alignment === 'speed') {
      itemsCopy.sort(
         (a, b) =>
            a.segments.reduce((acc, e) => acc + e.duration, 0) -
            b.segments.reduce((acc, e) => acc + e.duration, 0),
      );
   }
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid
            container
            sx={{
               justifyContent: 'center',
               alignItems: 'center',
            }}
            className={style.containerList}
         >
            {itemsCopy
               ? itemsCopy.map((e, i) => (
                    <Card key={`${i}list`} style={{ margin: '5px' }}>
                       <Item data={e} />
                    </Card>
                 ))
               : ''}
         </Grid>
      </Box>
   );
};

export default TicketsList;
