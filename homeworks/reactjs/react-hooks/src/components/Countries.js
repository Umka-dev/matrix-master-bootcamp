import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Countries() {
  // componentDidMount ... useEffect
  // state ... useState

  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((result) => {
        setCountries(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="all-countries-box">
      {countries &&
        countries.map((country) => {
          return (
            <div className="one-country-box" key={country.name.common}>
              <img src={country.flags.png} alt={country.flags.alt} />
            </div>
          );
        })}
    </div>
  );
}
