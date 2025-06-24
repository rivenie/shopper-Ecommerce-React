import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png"

// Se está obteniendo de la variable product "{product}". Props actualmente es la variable product y dentro de 
// product está el {product} el cual es el producto de el json all_product.

const Breadcrum = (props) => {
  const {product} = props;
  return(
    <div className="Breadcrum">
      HOME <img src={arrow_icon} alt=""/> 
      SHOP <img src={arrow_icon} alt="" /> {product.category} 
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
};

export default Breadcrum;
