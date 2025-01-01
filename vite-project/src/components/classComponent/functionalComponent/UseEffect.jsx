import { useState, useEffect } from "react";
import axios from 'axios';


   /* var [ text, settext ] = useState("Kongu");
    useEffect (()=>{
        settext("KEC");
        console.log(settext);
    },[])
    return (
        <section>
            <h1>Use Effect Example</h1>
            <input type="text" placeholder="Enter your text" value={text} onChange={(e) => { settext(e.target.value) }} />
            <h2>Text typed is {text}</h2>
        </section>
    )
    
    */


    
    const UseEffect = () => {
        const [post, setPost] = useState([]);
    
        useEffect(() => {
            axios
                .get("https://jsonplaceholder.typicode.com/posts/")
                .then((res) => {
                    console.log(res.data); 
                    setPost(res.data); 
                })
                .catch((err) => {
                    console.error(err); 
                });
        }, []);
    
        return (
            <div>
                <h1>Fetching Data from Json PlaceHolder</h1>
                <h2>Posts:</h2>
                <ol>
                    {post.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
            </div>
        );
    };
    
    export default UseEffect;
    




