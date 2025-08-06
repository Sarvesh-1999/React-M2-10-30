import { useEffect, useState } from "react";
import style from "./FetchTask.module.css";

const FetchTask = () => {
  //! to store dropdown data
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  //! to store api data
  const [allCountries, setAllCountries] = useState([]);
  const [allStates , setAllStates] = useState([])
  const [allCities , setAllCities] = useState([])

  //! to enable/disable select tags
  const [isStateDisable, setIsStateDisable] = useState(true);
  const [isCityDisable, setIsCityDisable] = useState(true);

  const [userData , setUserData] = useState({
    country:"",
    state:"",
    city:""
  })

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
        setAllStates(stateData) //! storing states data to allStates
    }
    getAllStates()
  }, [selectedCountry]);

 //!   to get all cities with respect to selectedCountry and selectedState
  useEffect(()=>{
    if(!selectedState) return;
    setIsCityDisable(false)

    async function getAllCities(){
      let resp = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`)
      let cityData = await resp.json()
      setAllCities(cityData)
    }

    getAllCities()      

  },[selectedState])

  useEffect(()=>{
    if(!selectedCity) return

    setUserData({
      country : selectedCountry,
      state : selectedState,
      city : selectedCity
    })

  },[selectedCity])


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

          {allStates.map((state,idx)=>{
            return <option value={state} key={idx}> {state} </option>
          })}
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

          {allCities.map((city,idx)=>{
            return <option value={city} key={idx}>{city}</option>
          })}
        </select>
      </section>


      {!selectedCity ? null : <h1>Country: {userData.country} State: {userData.state} City: {userData.city}</h1>}
    </div>
  );
};

export default FetchTask;
