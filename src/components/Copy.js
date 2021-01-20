import React from 'react'

const Copy = (props) => {
  return (
    <div className="copy">
      <h5 className="smallHeader"> <strong>{props.smallHeader} </strong> </h5>
      <h1 className="headLine"> {props.headLine} </h1>
      <h3> {props.body} </h3>
      <div class="ui inverted animated button" tabindex="0">
        <div class="visible content"> {props.cta} </div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
      </div>
    </div>
  )
}

export default Copy
