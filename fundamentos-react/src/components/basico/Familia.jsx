import React, { cloneElement } from 'react'

export default function Familia(props) {
  const { children } = props

  return (
    <div>
      {/* { React.Children.map(children, (child) => {
        return cloneElement(child, props)
      })} */}
      { children.map((child, i) => {
        return cloneElement(child, {...props, key: i })
      })}
    </div>
  )
}
