import React from 'react'

export default function Result(props) {   
    const handleSubmit=(e)=>{
  e.preventDefault();
    }
  return (
    <div>
        <div className="result-data">
                <a href="" className="result-data-link" onClick={handleSubmit}>
                {props.Url}
                
                </a>

                <a href="" className="result-title" onClick={handleSubmit} >
                <h3> {props.Title} </h3>
                </a>
                <p className="data-description">
                 {props.Description}
                </p>
              </div>
    </div>
  )
}
