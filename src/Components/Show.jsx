import React from 'react'
import "./show.css"
export default function Show(props) {
    const { results, info } = props;
  return (
    <div className="show">
    <div className="show__info">
      {info ? `Total results: ${info.totalResults}` : ""}
    </div>
    {results.length > 0
      ? results.map((result) => (
          <div className="show_details">
            <h3 className="show_link">
              <a href={result.displayLink}>{result.displayLink}</a>
            </h3>
            <div className="show_title">
              <a href={result.link}>{result.title}</a>
            </div>
            <div className="show_description">
              <p>{result.snippet}</p>
            </div>
          </div>
        ))
      : ""}
</div>
  )
}
