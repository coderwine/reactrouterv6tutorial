import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../data.js';

export default function Invoices() {
    let invoices = getInvoices();

    return(
        // <main style={{ padding: '1rem 0'}}>
        //     <h2>Invoices</h2>
        // </main>
        <div style={{ display: 'flex' }}>
            <nav style={{ borderRight: 'solid 1px', padding: '1rem'}} >
                {invoices.map(i => (
                    <Link
                        style={{ display: 'block', margin: '1rem 0'}}
                        to={`/invoices/${i.number}`}
                        key={i.number}
                        >
                        {i.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}

/* 
    We can set our route "to" our desired endpoint, highlighting the data we are pulling in.
*/
