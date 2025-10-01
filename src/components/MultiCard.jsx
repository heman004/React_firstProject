import { useEffect, useState } from "react";
import Card from "./Card";

const MultiCard = () => {
  const [card, setCard] = useState([]);

  const fetch_data = async () => {
    const str = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await str.json();
    console.log(data);
    setCard(data);
  };

  useEffect(() => {
    fetch_data();
  });

  return (
    <>
      {/* <div className="card">
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWSZ2QlyTrMcAodcYxOlJwOiybn_jui2gIA&s"
          name="Tata Motars"
          price="₹5.60 Lakh"
          country="India"
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RrjEXdomFAMtm2xp1kg6fegZjcEuwnHxyg&s"
          name="Toyota"
          price="₹6.67 Lakh"
          country="Japan"
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdP1pVjsPOFmljiG7sb3KjanmGnp6-sCzcgw&s"
          name="BMW"
          price="₹44.40 Lakh"
          country="Germany"
        />
      </div> */}

<div className="">
      {card.slice(0, 10).map((e) => (
        <div key={e.id}>
          <h2> {e.title} </h2>
          <h2> {e.body} </h2>
        </div>
      ))}
      </div>
    </>
  );
};
export default MultiCard;
