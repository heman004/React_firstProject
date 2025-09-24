const Object = () => {

    let obj = {sub: "React", year: 2025, opportity: "100%"}
    let {sub, opportity} = obj

    return(
        <>
        <div className="p-15">
          <h2>Object Rendering</h2>
        <div className="bg-fuchsia-600 text-center font-bold text-2xl p-5 text-fuchsia-300">

          <h3>subject: {obj.sub}</h3>
          <h3>year : {obj.year}</h3>

          <h2>Object destructring</h2>
          <h3>subject : {sub}</h3>
          <h3>opportity : {opportity}</h3>
        </div>  
        </div>  
        </>
    )
}
export default Object;