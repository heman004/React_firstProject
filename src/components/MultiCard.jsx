import Card from "./Card";

const MultiCard = () => {

    return(
        <>
          <div className="card">
          <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWSZ2QlyTrMcAodcYxOlJwOiybn_jui2gIA&s" name= "Tata Motars" price= "₹5.60 Lakh" country="India" />
          <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RrjEXdomFAMtm2xp1kg6fegZjcEuwnHxyg&s" name= "Toyota" price= "₹6.67 Lakh" country="Japan" />
          <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdP1pVjsPOFmljiG7sb3KjanmGnp6-sCzcgw&s" name= "BMW" price= "₹44.40 Lakh" country="Germany" />
          </div>
        </>
    )

}
export default MultiCard;