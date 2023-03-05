import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";

import MicIcon from "@mui/icons-material/Mic";
import { useHistory } from "react-router";
import { Button } from "@mui/material";

function SearchBar(props) {

  const [input, setInput] = useState("");
  
  const Search =(e)=>{
        e.preventDefault();
        console.log(input);
      alert(input)
       
  }

var move=`/search/:${"Mayur Adlak"}`;
  return (
    <div className="search-bar" id="set">
      <form action="" className="input-data">
        <SearchIcon className="search-icon" color="grey" />
        <input
          type="text"
          placeholder=""
          value={input}
          
         onChange={(e) => {
          setInput(e.target.value) 
        
        }
        
        }
        />

        <MicIcon className="mic" />
      </form>
      {props.show ? (
        <div className="search-btn">
          <Button type="submit"  variant="outlined" size="small" >
            Google search
          </Button>
          <Button href="" variant="outlined" size="small">
            
            I am feel Lucky
          </Button>
        </div>
      ) : (
        <div className="search-btn">
        <Button type="submit" href=""  style={{display:'none'}}  variant="outlined" size="small" onClick={Search}>
          Google search
        </Button>
      
      </div>
      )}
    </div>
  );
}
export default SearchBar;
