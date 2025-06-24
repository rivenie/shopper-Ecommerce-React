import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

// En este componente se recibe id, name, image, new_price y old_price. Se tiene una función Link que en base al 
// id que se reciba se cambiará la url. También se le dió un scrollTo para que al dar clic vaya al inicio de la 
// página.

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link> 
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-proce-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item