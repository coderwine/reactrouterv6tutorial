import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data.js';
import { QueryNavLink } from './querynavlink';

export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();

    return(
        // <main style={{ padding: '1rem 0'}}>
        //     <h2>Invoices</h2>
        // </main>
        <div style={{ display: 'flex' }}>
            <nav style={{ borderRight: 'solid 1px', padding: '1rem'}} >
                <input
                    value={searchParams.get('filter') || ""}
                    onChange={e => {
                        let filter = e.target.value;
                        filter ? setSearchParams({ filter }) : setSearchParams({});
                    }}
                />
                {invoices.map(i => (
                    <QueryNavLink
                        style={({isActive}) => { 
                            return {
                                display: 'block', 
                                margin: '1rem 0',
                                color: isActive? "red" : ""
                            };
                        }}
                        to={`/invoices/${i.number}`}
                        key={i.number}
                        >
                        {i.name}
                    </QueryNavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}

/* 
    We can set our route "to" our desired endpoint, highlighting the data we are pulling in.

    NavLink allows us to utilize "isActive" value that is being passed by the component itself and adjust styling dependant on that true/false response.
        - We can do something similar using the className on it as well.
        
        ex: 
        className={({ isActive }) => isActive ? "red" : "blue"}

    useSearchParams.
        Used very much like useState but stores and sets the state of the URL earch params instead of in memory.
*/
