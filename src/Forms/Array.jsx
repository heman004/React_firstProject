const  Array = () => {


    let arr = ["React", "Node", "Js"]
    let arr1 = "Array Rendering"

    return(
        <>
        <div className="p-15">
        <div className="border-2 text-center p-5 bg-amber-600 text-amber-50 text-2xl font-bold" >
          <h2>{arr1}</h2>
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