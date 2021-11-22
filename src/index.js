import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} > 
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route /*3*/
            index
            element={
              <main style={{ padding: '1rem'}}>
                <p>Select an Invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} /*2*/ /> 
        </Route>
        <Route  /*1*/
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          } />
      </Route>
    </Routes>
    </BrowserRouter>,
    rootElement
  );
  
  reportWebVitals();

  /* 
  NOTE: 
        1)  It's good practice to always handle a "no match" case.  The additional Route within the nest elements will help us handle that issue when a route doesn't exist.
            - The "*" will match only when no other routes do.
          
        2)  The ":invoiceId" is a URL Param.  This means it can match any value as long as the pattern is the same.
            The <Route> adds a second layer of route nesting when it matches:
              <App>
                <Invoice>
                  <Invoice />
                </Invoice>
              </App>
            This is due to the <Route> being nested.
            *We will need an Outlet in the parent component of the nested route (ie: Invoices)
        
        3) Adding an "index" Route can allow us to set a default.  This is being passed as a prop rather than a path.  This sets it's path as the path of the parent component.
          - It renders through the parents outlet path.
          - It matches when the parent routes match but no other routes also match.
          - default child route.
          - renders when the user hasn't clicked one of the items in the nav list.
  */


// Original Build
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

