import React from "react"

const CopyRightImage = (props) => {
  return (
    <div class="ui grid stackable copyimage">
    <div class="eight wide column">
      <img style={{width:"90%"}} src={props.sellingPointImage} alt="sellingpt" />
    </div>
      <div class="six wide column">
        <h1 className="header"> {props.header} </h1>
        <h3 className="followUp"> {props.followUp} </h3>
      </div>

    </div>
  )
}

export default CopyRightImage
