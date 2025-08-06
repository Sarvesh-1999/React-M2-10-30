const FlagCard = ({ele}) => {
  return (
    <div >
      <img src={ele.flag} alt={ele.abbr} height={100} width={100} />
      <h3>{ele.name}</h3>
    </div>
  );
};

export default FlagCard;
