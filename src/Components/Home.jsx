import React,{useState} from 'react'
import {FaSistrix,FaMicrophone} from "react-icons/fa"
import "./home.css"
import axios from 'axios';
export default function Home(props) {
  const [search,setSearch]=useState([]);
  const onSubmit=async(e)=>{
    props.history.push('/search')
    e.preventDefault(false);
       var query=e.target.seacrh.value;
      setSearch(query);
       var key="AIzaSyBe0fV9Iv597I4YwC5aZkyG6LNqol4RGQc";
       var ex="81bad5e1fdcdb8dd1";
       var api=`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${ex}&q=${query}`;
     await axios.get(api)
     .then(async(response)=>{
       var parseData= await response.json();
      console.log(parseData);
     })
  //      var api=`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${ex}&q=${query}`;
  // await fetch(api).then(async(response)=>{
  //   var Data= await response.json();
   
  //   })
  // })
  
//  Data.map((event)=>{
//      console.log(event.items.title);
//      console.log(event.items.link);
//  })
  // setData([])
  // console.log(Data);
  }
  return (
    <div>
        {/* AIzaSyB04SBr-jX6nVeJn4ZwGh0UD45qiqFowec 
        key=AIzaSyBe0fV9Iv597I4YwC5aZkyG6LNqol4RGQc
        search engine ID = 81bad5e1fdcdb8dd1
        API Key =https://www.googleapis.com/customsearch/v1?key=AIzaSyBe0fV9Iv597I4YwC5aZkyG6LNqol4RGQc&cx=81bad5e1fdcdb8dd1:omuauf_lfve&q=HTML
        */}
        <div className="home_container">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="google_icon">
                <img className='google' src="https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg" alt="" />
                {/* <i className='fa fa-search'></i> */}
            </div>
            <div className='form'>
            <br/>
            
            <form  onSubmit={onSubmit}>
                <input type="text"  name='seacrh' className='search' placeholder='Search the web' /> &nbsp;
                <button className='btn btn-primary'>Search</button>
            </form>
            
            </div>
          
           
        </div>
    </div>
  )
}
