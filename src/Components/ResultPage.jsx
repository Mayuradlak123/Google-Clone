import React from "react";
import "./result.css";
import IconGithub from "../image/Myicon.png";
import { Link } from "react-router-dom";
import GoogleImage from "../image/GoogleIcon.png";
import SearchBar from "./SearchBar";
import ImageIcon from "@mui/icons-material/Image";
import FeedIcon from "@mui/icons-material/Feed";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "./Redux-Components/stateProvider";
// import { useStateValue } from "./Redux-Components/stateProvider";
function ResultPage() {
  // const [{term}]=useStateValue(" ");
  // console.log(term);
  var Result;
  return (
    <>
      <div className="showresult">
        <div className="result-header">
          <Link to="/">
            <img src={GoogleImage} alt="" />
          </Link>
          <div className="result-body">
            <SearchBar show={false}  />
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

          {
            (Result = (
              <div className="result-data">
                <a href="" className="result-data-link">
                  <img src={IconGithub} alt="" className="Image" />
                  github.com
                </a>

                <a href="" className="result-title">
                  The Google Clone
                </a>
                <p className="data-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  vero!
                </p>
              </div>
            ))
          }
          {Result}
        </div>
      </div>
    </>
  );
}

export default ResultPage;
