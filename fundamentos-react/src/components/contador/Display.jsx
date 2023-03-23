import React from "react"

export default function Display(props) {
  const { numero } = props

  return (
    <React.Fragment>
      <h3 className="ta-c">{ numero }</h3>
    </React.Fragment>
  )
}
