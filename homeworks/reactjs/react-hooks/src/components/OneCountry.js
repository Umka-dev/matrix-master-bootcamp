import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

export default function OneCountry() {
  const params = useParams();
  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${params.countryName}`)
      .then((result) => {
        setCountryInfo(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, [params.countryName]);

  return (
    <div>
      <h3>
        <Link to="/">Show all countries</Link>
      </h3>

      {countryInfo ? (
        <div>
          <h1>
            {countryInfo.name.official} ({countryInfo.name.common})
          </h1>
          <div className="one-country-box">
            <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
          </div>
          <h2>Capital: {countryInfo.capital}</h2>
          <div>
            <Link to={countryInfo.maps.googleMaps}>Google Maps</Link>
          </div>
          <div>
            <Link to={countryInfo.maps.openStreetMaps}>Open Street Maps</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
