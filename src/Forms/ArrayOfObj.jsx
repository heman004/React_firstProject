const ArrayOfObj = () => {

    let arr = [
        {id : 1, sub : "react", year: 2025},
        {id : 2, sub : "js", year: 2024},
        {id : 3, sub : "css", year: 2023},
        {id : 4, sub : "hml", year: 2022}
    ]

    return(
       <>
       <div className="p-15">
       <div className=" text-center p-5 bg-cyan-400 text-2xl font-bold text-gray-900">
         <h2>Array of Object Rendering</h2>
         <ul>
            {arr.map( (arr, i) => (
                <li key={i}>{arr.sub} - {arr.year}</li>
            ) )}
         </ul>

         <h2>Array of Object Destructure</h2>
         {arr.map( ({ id, sub,})=> (
            <h3 key={id}> subject : {sub} </h3>
         ) )}

         {arr.map( ({id, year}) => (
            <h3 key={id}>year: {year}</h3>
         ) ) }
        </div>  
        </div>
       </>
    )
}
export default ArrayOfObj