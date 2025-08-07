import { useApi } from "./customHook";
import FlagCard from "./FlagCard";

const Flags = () => {

  let flagData = useApi("https://xcountries-backend.azurewebsites.net/all");

  console.log(flagData);

  return (
    <div>
      <h1>Flags</h1>

      <section>
        {flagData.length === 0 ? (
          <h1>Loading....</h1>
        ) : (
          flagData.map((ele, idx) => {
            return <FlagCard key={idx} ele={ele}/>
          })
        )}
      </section>
    </div>
  );
};

export default Flags;
