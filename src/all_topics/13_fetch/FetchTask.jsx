import { useEffect, useState } from "react";
import style from "./FetchTask.module.css";

const FetchTask = () => {
  //! to store dropdown data
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  //! to store api data
  const [allCountries, setAllCountries] = useState([]);

  //! to enable/disable select tags
  const [isStateDisable, setIsStateDisable] = useState(true);
  const [isCityDisable, setIsCityDisable] = useState(true);

  //!   to get all countries
  useEffect(() => {
    async function getAllCountries() {
      let resp = await fetch(
        "https://crio-location-selector.onrender.com/countries"
      );
      let countriesData = await resp.json();
      setAllCountries(countriesData);
    }
    getAllCountries();
  }, []);

  //!   to get all states with respect to selectedCountry
  useEffect(() => {
    if (!selectedCountry) return;
    setIsStateDisable(false);
 
    async function getAllStates(){
        let resp = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`)
        let stateData = await resp.json()
        console.log(stateData);
    }
    getAllStates()
  }, [selectedCountry]);

  return (
    <div className={style.FetchTaskContainer}>
      <h1>Fetch Task - 1</h1>

      <section>
        <select
          name="country"
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="" disabled>
            Select Country
          </option>

          {allCountries.map((countryName, idx) => {
            return (
              <option value={countryName} key={idx}>
                {countryName}
              </option>
            );
          })}
        </select>

        <select
          name="state"
          id="state"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={isStateDisable}
        >
          <option value="" disabled>
            Select State
          </option>
        </select>

        <select
          name="city"
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={isCityDisable}
        >
          <option value="" disabled>
            Select City
          </option>
        </select>
      </section>
    </div>
  );
};

export default FetchTask;
