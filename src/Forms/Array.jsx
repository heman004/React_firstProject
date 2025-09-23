const  Array = () => {


    let arr = ["React", "Node", "Js"]
    let arr1 = "Array Rendering"

    return(
        <>
          <h2>{arr1}</h2>
          <ul>
            {arr.map((arr, i) => (
               <li key={i}>{arr}</li>
            ))}
          </ul>
        </>
    )
   
}
export default Array;