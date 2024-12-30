import '../../../assets/css/NavBar.css'

const NavBar = () => {
    var styling = {
        color:"yellow"
    }
    return(
        <div>
            <h2 id="idSeg"> Testing Styling</h2>
    <h1 style={styling}>This is NavigationBar</h1>
    <p className = "box-model">Hello</p>
    
    </div>
    )
     
}
export default NavBar