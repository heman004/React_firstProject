const Object = () => {

    let obj = {sub: "React", year: 2025, opportity: "100%"}
    let {sub, opportity} = obj

    return(
        <>
          <h2>Object Rendering</h2>
          <h3>subject: {obj.sub}</h3>
          <h3>year : {obj.year}</h3>

          <h2>Object destructring</h2>
          <h3>subject : {sub}</h3>
          <h3>opportity : {opportity}</h3>
        </>
    )
}
export default Object;