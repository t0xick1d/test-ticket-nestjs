import Link from '@mui/material/Link';
import style from './layout.module.scss';

export default function NotFound() {
   return (
      <div>
         <div>
            <h2 className={style.error}>404 Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/home">Return Home</Link>
         </div>
      </div>
   );
}
