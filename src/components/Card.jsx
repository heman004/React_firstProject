
import { useEffect, useState } from "react";

const Card = () => {

  const [fet, setFet] = useState([]);
  const [loading, setLoading] = useState(true);

    const fetching = async () => {
    try{
      setLoading(true);
      const data = await fetch("https://dummyjson.com/products");
      const datas = await data.json();
      setFet(datas.products)
    } catch(error){
      console.log("something went wrong", error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect( () => {
    fetching()
  },  [])


  const ProductList = () => {
    return(
       <div className="w-60 rounded bg-white p-10 animate-pulse">
        <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 rounded bg-gray-300 w-3/4 mb-2"></div>
        <div className="h-3 rounded bg-gray-300 w-full mb-4"></div>
        <div className="h-3 rounded bg-gray-300 w-2/3 mb-1"></div>
        <div className="w-24 rounded bg-gray-300 mt-10 h-8"></div>
       </div>
    )
  }

    return(
        <>

          <div>
          { loading ? 
          <div className="">
            { Array.from( {length: 5} ).map( ( _, i ) => (
              <ProductList key={i} />           
             ) ) }
              </div>  :
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
             {fet.map( (e) => (
              <div className="">
              <div key={e.id} className="bg-emerald-300 p-4 rounded-lg shadow-md text-center">
                 <h2 className="font-bold text-2xl"> {e.title} </h2>
                 <h2> {e.category} </h2>
                 <h2> ${e.price} </h2>
                 <h2>⭐{e.rating} </h2>
                 <h2> Stock: {e.stock}</h2>
                 <img src={e.thumbnail} alt="" className="w-full h-40 object-cover  rounded" />
              </div>
              </div>
             ) )}
             </div>
           }
           </div>
        </>
    )

}
export default Card;