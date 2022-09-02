import List from './components/List';

import { Fragment } from 'react';
import './App.css';

function App() {
  const countries = [
    { id: 'c1', countryName: 'Armenia', countryCode: 374 },
    { id: 'c2', countryName: 'Belgium', countryCode: 32 },
    { id: 'c3', countryName: 'Canada', countryCode: 1 },
    { id: 'c4', countryName: 'Denmark', countryCode: 45 },
    { id: 'c5', countryName: 'Finland', countryCode: 358 },
    { id: 'c6', countryName: 'Germany', countryCode: 49 },
  ];
  return (
    <Fragment>
      <List countries={countries} />
      <div>
        <label>Search Country: </label>
        <input />
      </div>
    </Fragment>
  );
}

export default App;
