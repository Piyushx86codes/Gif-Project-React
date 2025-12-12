import { useEffect, useState } from "react"
import axios from 'axios';


const API_KEY = process.env.GIPHY_API_KEY;
export const Random =() =>{
    const [gif,setGif] = useState('');

    async function fetchData(){
        const url = `https://api:giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const response = await axios.get(url);
        console.log(response);
    }

    useEffect(()=>{
       fetchData();
    },[])




    function clickhandler(){
         
    }
    return (
        <div>
            <h1>Random Gif</h1>
            <img src ={gif} width="450 "/>
            <button onClick={clickhandler}>
                Generate
            </button>
        </div>
    )
}