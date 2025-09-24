const  Array = () => {


    let arr = ["React", "Node", "Js"]
    let arr1 = "Array Rendering"

    return(
        <>
        <div className="p-15">
          <h2 className="bg-black p-5 text-center text-white font-extrabold text-2xl">{arr1}</h2>
        <div className="border-2 text-center p-5 bg-amber-600 text-amber-50 text-2xl font-bold" >
          <ul>
            {arr.map((arr, i) => (
               <li key={i}>{arr}</li>
            ))}
          </ul>
        </div>   
        </div>
        </>
    )
   
}
export default Array;