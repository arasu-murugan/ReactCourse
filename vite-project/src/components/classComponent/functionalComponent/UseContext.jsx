import Component2 from "../../ContextComponent/Component2"
import React from "react"
var ThemeProvider = React.createContext();
var ExamResults = () => {
    return (
        <div>
            <ThemeProvider value = {{sgpa : "10.00"}}>
                <h1>
                    This is example of UseContext- Parent Component
                </h1>
                <Component2 />
            </ThemeProvider>
        </div>
    )
}
export default ExamResults