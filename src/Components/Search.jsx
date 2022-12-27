import React,{useEffect, useState} from 'react'
import "./search.css"
import Show from './Show';
import axios from 'axios';
import {FaSistrix,FaMicrophone} from "react-icons/fa"
export default function Search(props) {
   
    
    const [results, setResults] = React.useState([]);
    const [info, setInfo] = React.useState("");
    const [page,setPage]=useState(1);
    const searchGoogle = async (e) => {
      // e.preventDefault();
      try {
        var key="AIzaSyBDW4TTIWDaONr1pnmgrB5WDy53nvejtww";
        var ex="81bad5e1fdcdb8dd1";
        var query=document.getElementById('search').value;
        var api=`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${ex}&q=${query}&page=${page}`;
     
        const response = await axios.get(api);
        if (response) {
          setResults(response.data.items);
          setInfo(response.data.searchInformation);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
      
    
    useEffect( ()=>{
      searchGoogle();
    },[page])
  return (
    <div>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
     
      <div className="search_icon">
        <img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg" alt="" />
        {/* <input type="text" placeholder='Search Google or type a query' /> */}
      </div>
      <div className="search"> <input type="text" id='search' placeholder='Search the web'/> </div> 

       <div className="icon">
       
       <button className='button' onClick={searchGoogle}>Search</button>
       </div>
       <br />
       <Show results={results} info={info} />
       <div className="page">
      {/* <button onClick={()=>setPage(page+1)}>  Next </button> */}
        </div>
    </div>
  )
}
