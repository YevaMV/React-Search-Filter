import List from './components/List';
import { Fragment, useState } from 'react';
import './App.css';

const countries = [
  { id: 'c1', countryName: 'Armenia', countryCode: 374 },
  { id: 'c2', countryName: 'Belgium', countryCode: 32 },
  { id: 'c3', countryName: 'Canada', countryCode: 1 },
  { id: 'c4', countryName: 'Denmark', countryCode: 45 },
  { id: 'c5', countryName: 'Finland', countryCode: 358 },
  { id: 'c6', countryName: 'Germany', countryCode: 49 },
  { id: 'c7', countryName: 'France', countryCode: 33 },
  { id: 'c8', countryName: 'Hungary', countryCode: 36 },
  { id: 'c9', countryName: 'Iceland', countryCode: 354 },
  { id: 'c10', countryName: 'Italy', countryCode: 39 },
  { id: 'c11', countryName: 'Japan', countryCode: 81 },
  { id: 'c12', countryName: 'Mexico', countryCode: 52 },
  { id: 'c13', countryName: 'Spain', countryCode: 34 },
];

function App() {
  const [searchCountry, setSearchCountry] = useState(countries);

  function searchHandler(event) {
    setSearchCountry(event.target.value);

    for (const item of countries) {
      if (event.target.value === '') {
        setSearchCountry(countries);
        return;
      }
      if (event.target.value.toLowerCase() === item.countryName.toLowerCase()) {
        console.log(event.target.value);
      }
    }
  }

  return (
    <Fragment>
      <List countries={countries} />
      <div>
        <label>Search Country: </label>
        <input type="text" onChange={searchHandler} />
      </div>
    </Fragment>
  );
}

export default App;
