import { useEffect, useState } from "react";

export const useApi = (API_URL) => {
  const [apiData, setApiData] = useState([]);
  
  async function getData(url) {
    let resp = await fetch(url);
    let data = await resp.json();
    setApiData(data);
  }

  useEffect(() => {
    getData(API_URL);
  }, []);

  return apiData

};


