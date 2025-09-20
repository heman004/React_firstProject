const Card = ({ img, name, price, country}) => {

    return(
        <>
          <div style={ { padding:"15px", margin:"10px" } } className="car">
          <img src={img} alt="car" />  
          <h5 style={ { padding: "10px" } }>Name : {name}</h5>
          <h5 style={ { padding: "10px" } }>Price : <mark>{price}</mark> </h5>
          <h5 style={ { padding: "10px" } }>Country : {country} </h5>
          </div>
        </>
    )

}
export default Card;