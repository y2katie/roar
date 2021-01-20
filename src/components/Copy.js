import React from 'react'

const Copy = (props) => {
  return (
    <div className="copy">
      <h5> {props.smallHeader} </h5>
      <h1> {props.headLine} </h1>
      <p> {props.body} </p>
      <button> {props.cta} </button>
    </div>
  )
}

export default Copy
