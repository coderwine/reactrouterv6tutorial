// import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}  
      >
        <Link to='/invoices'>Invoices</Link> | {" "}
        <Link to='/expenses'>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;


/*
  Link is changing the URL without causing a full page reload.

  - Before our nested routes will work, we need to render an <Outlet /> in the parent component.  In this case, the App.jsx.  This should work at any level of the route hierarchy.
*/
