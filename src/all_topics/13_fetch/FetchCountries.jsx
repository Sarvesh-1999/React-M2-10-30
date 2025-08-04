import React, { useEffect, useState } from "react";

const FetchCountries = () => {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    let resp = await fetch("https://xcountries-backend.azurewebsites.net/all");
    let data = await resp.json();
    setCountries(data); // [{},{}...] 250
  }

  useEffect(() => {
    getCountries();
  }, []);

  console.log(countries);

  return (
    <div>
      <h1>FetchCountries</h1>

      <section style={{display:"flex",flexWrap:"wrap",gap:"30px",textAlign:"center"}}>
        {countries.length === 0 ? (
          <h1>Loading....</h1>
        ) : (
          countries.map((ele, idx) => {
            let { name, abbr, flag } = ele;
            return (
              <div key={idx} style={{border : "1px solid black",maxWidth:"150px"}}>
                <img src={flag} alt={abbr}  height={100} width={100}/>
                <h4>{name}</h4>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default FetchCountries;
