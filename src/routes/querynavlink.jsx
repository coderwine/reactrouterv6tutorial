import { useLocation, NavLink } from 'react-router-dom';

export function QueryNavLink({ to, ...props}) {
    let location = useLocation();

    return <NavLink to={to + location.search} {...props} />
}

/* 
    useSearchParams and useLocation return a location that telss us info about the URL.

    {
        pathname: '/invoices',
        search: '?filer=sa',
        hash: '',
        state: null,
        key: "ae4cz2j"
    }

    the task becomes:  add the location.search onto the "to" prop.  
*/