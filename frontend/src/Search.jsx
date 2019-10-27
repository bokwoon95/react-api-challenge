import React, { useState } from 'react';
import Card from "./Card"


export default function Search() {
    
    const [keyword, setKeyword] = useState("");
    const [added, add] = useState([]);
    const [found, searched] = useState([]);
    
    function searchText(keyword){
        console.log(keyword)
        fetch("https://api.github.com/search/users?q="+keyword+"&per_page=9")
        .then(res=>res.json())
        .then(data=>console.log(data.items))
        console.log(found)
    };
    
    function renderCards(){

    }

    return(
        <div>
            <div className="container-fluid d-flex align-items-center justify-content-center h-100 mt-5 w-auto">
                <input 
                type="text"
                className='form-control' 
                placeholder="Enter name" 
                onChange={(e) => setKeyword(e.target.value)} 
                style={{width : "200px"}}></input>
                <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={ searchText }>Go!</button> 
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                <h4 className="my-5">No user stored in this profile.</h4>
            </div>
        </div>            
    );
};
