import { useState } from "react";
const Gallery = () =>{
    var[counter,setcounter]=useState(0);
    const increment=()=>
    {
        setcounter(counter+1);
    }
    return(
        <div>
            <h1>
                This is Gallery page
                <h4>this my counter{counter}</h4>
                <button onClick={increment}>Clicke me... </button>
            </h1>
        </div>
    )
}
export default Gallery;