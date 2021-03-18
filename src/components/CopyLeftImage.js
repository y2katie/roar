import React from "react"

const CopyLeftImage = (props) => {
  return (
    <div class="ui grid stackable copyimage">
      <div class="one wide column"> </div>
      <div class="five wide column">
        <h1 className="header"> {props.header} </h1>
        <h3 className="followUp"> {props.followUp} </h3>
      </div>
      <div class="eight wide column">
        <img style={{width:"90%"}} src={props.sellingPointImage} alt="sellingpt" />
      </div>
    </div>
  )
}

export default CopyLeftImage
