import { useState, useEffect } from "react";
import axios from 'axios';
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
    




