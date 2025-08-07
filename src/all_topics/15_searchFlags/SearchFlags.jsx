import { useEffect, useState } from "react";

const SearchFlags = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getCountries() {
      let resp = await fetch(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      let data = await resp.json();
      setAllCountries(data);
      setCountries(data);
    }
    getCountries();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setCountries(allCountries);
    } else {
      const filteredCountries = allCountries.filter((ele) => {
        return ele.name.toLowerCase().includes(search.toLowerCase().trim());
      });
      setCountries(filteredCountries);
    }
  }, [search]);

  return (
    <div className="bg-gray-100 h-screen w-full">
      <h1 className="text-center p-1 text-3xl font-semibold">
        Search Flags Task
      </h1>

      <form className="p-3 flex justify-center">
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here..."
          className="bg-white border border-gray-400 rounded-2xl w-[50%] p-3"
        />
      </form>

      <section className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {countries.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          countries.map((country) => {
            return (
              <div className="border border-gray-400 rounded-xl shadow-2xl p-2 flex flex-col items-center justify-center">
                <img
                  src={country.flag}
                  alt={country.abbr}
                  height={100}
                  width={100}
                />
                <h1>{country.name}</h1>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default SearchFlags;
