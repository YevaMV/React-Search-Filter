import Countries from './Countries';
import { Fragment, useState } from 'react';
import './App.css';

function App() {
  const [searchCountry, setSearchCountry] = useState('');

  function searchHandler(event) {
    setSearchCountry(event.target.value);
  }
  return (
    <Fragment>
      <div>
        <label>Search Country: </label>
        <input type="text" onChange={searchHandler} />
      </div>
      <ul>
        {Countries.filter((country) =>
          country.countryName
            .toLowerCase()
            .includes(searchCountry.toLocaleLowerCase())
        ).map((country) => (
          <li key={country.id}>
            <span>{country.countryName} :</span>
            <span>{country.countryCode}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
