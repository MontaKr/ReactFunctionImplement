import React from 'react'
import { Wrap } from './CardStyles'

const Card = ({data}) => {
  return (
    <Wrap>
        <div className="card__number">{data.id}</div>
        <div className="card__title">{data.title}</div>
        <div className="card__price">{data.price}</div>
        <div className="card__brand">{data.brand}</div>
    </Wrap>
  )
}

export default Card