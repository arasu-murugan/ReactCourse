import { useContext } from "react";
import Component2 from "./Component2";
export var ThemeProvider = React.createContext();

var result = useContext(ThemeProvider);
var StudentResult = () =>{
    return(
        <section>
              <ThemeProvider.Provider value = {{sgpa : "10.00",cgpa:"9.45"}}>
                <h1>This is an example of useContext - Parent Component</h1>
                <Component2/>
              </ThemeProvider.Provider>
        </section>
    )


}