import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Copy = (props) => {
  return (
    <div className="copy">
      <h5> {props.smallHeader} </h5>
      <h1> {props.headLine} </h1>
      <p> {props.body} </p>
    </div>
  )
}

export default Copy
