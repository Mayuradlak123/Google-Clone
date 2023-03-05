import React from "react"
import { Avatar } from "@mui/material";
import "./home.css"
import AppsIcon from '@mui/icons-material/Apps';
import GoogleImage from "../image/GoogleIcon.png"
import SearchBar from "./SearchBar";
function HomePage() {
  return (
    <>
      <div className="home">
        <div className="home-header">
          <div className="home-left">
            <a href="">About</a>
            <a href="">Store</a>
          </div>
          <div className="home-right">
            <a href="">Gmail</a>
            <a href="">Images</a>
           <a href=""><AppsIcon  /> </a> 
           <a href=""> <Avatar /> </a>
          </div>
        </div>
        <div className="home-body">
            <a href=""> <img src= {GoogleImage} alt="" /> </a>
            <div className="search-container">
                  <SearchBar show={true} />
            </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
