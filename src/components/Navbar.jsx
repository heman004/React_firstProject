import "../App.css"
const Navbar = () => {
    return (
        <>
          <header className="header">
              <div>
                <img src="/public/images/one.png" alt="" width={150} height={75}/>
              </div>
              <nav className = "nav">
                 <a href="">Home</a>
                 <a href="">About</a>
                 <a href="">Contact</a>
              </nav>
          </header>
        </>
    )
}
export default Navbar;