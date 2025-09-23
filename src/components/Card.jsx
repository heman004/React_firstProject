
import { useState } from "react";

const Card = ({ img, name, price, country}) => {


  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity( previous => previous + 1 )
    setQuantity( previous => previous + 1 )
  }

    return(
        <>
          <div style={ { padding:"15px", margin:"10px" } } className="car">
          <img src={img} alt="car" />  
          <h5 style={ { padding: "10px" } }>Name : {name}</h5>
          <h5 style={ { padding: "10px" } }>Price : <mark>{price}</mark> </h5>
          <h5 style={ { padding: "10px" } }>Country : {country} </h5>
          <h6 onClick={addQuantity} className="quantity">Quantity: {quantity}</h6>
          </div>
        </>
    )

}
export default Card;