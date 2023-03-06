import React, { useState } from "react";
import "./result.css";
import IconGithub from "../image/Myicon.png";
import { Link } from "react-router-dom";
import GoogleImage from "../image/GoogleIcon.png";
import Askdotcom from "../image/ask.png"
import SearchBar from "./SearchBar";
import ImageIcon from "@mui/icons-material/Image";
import FeedIcon from "@mui/icons-material/Feed";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SearchIcon from "@mui/icons-material/Search";
import Result from "./Result";
import { Button } from "@mui/material";
import "./search.css";

import MicIcon from "@mui/icons-material/Mic";
import axios from "axios";
function ResultPage() {
  const [input, setInput] = useState();
  const [result, setResult] = useState([]);
  const fetchData = async (e) => {
    e.preventDefault();
    const link = `https://google-search74.p.rapidapi.com/?query=${input}&limit=20&related_keywords=true`;
    const option = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a05dc01bc4msh4ce44a752e32965p1ff6dfjsn1ddc20b5e1bd",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    };
    var Data = await axios.get(link, option);
    var parseData =Data.data;
    setResult(parseData.results);
  };
  return (
    <>
      <div className="showresult">
        <div className="result-header">
          <Link to="/">
            <img src={Askdotcom} alt="" />
          </Link>
          <div className="result-body">
            {
              <form action="" className="input-data">
                <SearchIcon className="search-icon" style={{color:"grey"}}/>
                <input
                  type="text"
                  placeholder=""
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <MicIcon className="mic" style={{color:"grey"}} />
                <Button onClick={fetchData}>Search</Button>
              </form>
            }
            {/* <SearchBar show={false} /> */}
            <div className="head-option">
              <div className="head-option-right">
                <div className="search-option">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="search-option">
                  <FeedIcon />
                  <Link to="/all">News </Link>
                </div>
                <div className="search-option">
                  <ImageIcon />
                  <Link to="/all">Image</Link>
                </div>
                <div className="search-option">
                  <LocalOfferIcon />
                  <Link to="/all">Shopping</Link>
                </div>
                <div className="search-option">
                  <FmdGoodIcon />
                  <Link to="/all">Map</Link>
                </div>
                <div className="search-option">
                  <MoreVertIcon />

                  <Link to="/all">More</Link>
                </div>
              </div>

              <div className="head-option-right">
                <div className="search-option">
                  <Link to="/setting">Setting</Link>
                </div>
                <div className="search-option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="result-page">
          <p className="total">About 25,27,00,00,000 results (0.39 seconds)</p>

          {result.map((event) => {
            return (
              <Result
                Url={event.url}
                Title={event.title}
                Description={event.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ResultPage;
