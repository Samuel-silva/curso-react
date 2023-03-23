import './Card.css'
import React from 'react'

export default function Card(props) {
  const {titulo, color = '#03396c' } = props
  const cardStyle = {
    backgroundColor: color
  }

  return (
    <div className='card'>
      <p className='card__title' style={ cardStyle }>{ titulo }</p>
      <div className='card__content'>{ props.children }</div>
    </div>
  )
}
