import React from 'react';
import {response} from '../response'
function CountryList() {
  return (
    <section>
      <h1>Welcome</h1>
      <ul className="card country-list" data-testid="countryList">
        <li key="india" className="pa-10 pl-20">India</li>
      </ul>
    </section>
  );
}

export default CountryList;
