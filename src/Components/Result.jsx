import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
export default function Result(props) {
  const handleSubmit = (e) => {
    // e.preventDefault();
  };
  return (
    <div className="result-data">
      <a
        href={props.Url}
        className="result-data-link"
        target="_blank"
        onClick={handleSubmit}
      >
        {props.Url}
      </a>

      <a
        href={props.Url}
        target="_blank"
        className="result-title"
        onClick={handleSubmit}
      >
        {props.Title}
      </a>
      <p className="data-description">{props.Description}</p>
    </div>
  );
}
