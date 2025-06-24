import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

// Se crea un contexto global con valor inicial "null" llamado "ShopContext".
// También se importa el json all_product y se usa como valor para proveer al contexto global y para proveer 
// a todos los props.children. En este caso toda la app está envuelta.
// El contexto global sirve para datos entre componentes sin tener que pasarlos manualmente en cada nivel.
// En este caso se está compartiendo con toda la app el json all_product.

// Carrito de compras: Se crea primero una función auxiliaria llamada getDefaultCart que devuelve un objeto
// vacío.  
// Este objeto se llama cart y se llena del 0 al 35 (que es el número de valores que hay en el all_product) 
// y cada uno de esos tiene un valor de 0. Indicando así que hay 0 de ese producto añadido al carrito 
// inicialmente. 
// Luego se crea una variable de estado llamada cartItems los cuales se le da como valor inicial los 35 
// elementos del objeto que tienen como valor 0. 
// Luego se crea una función de manejador de estado llamado addToCart. Aquí se tiene un parámetro llamado 
// itemId. Aquí se actualiza la variable de estado. Se usa prev (previous state) el cual es un parámetro también. 
// El prev se usa cuando el nuevo valor del estado depende del anterior para evitar errores en el renderizado. 
// Aunque el prev es solo un nombre. No es predeterminado. Hay 3 partes aquí en esta actualización de valor de estado. 
// La primera como se dijo es seleccionar el valor actual del estado. Luego con ...prev se copia dicho valor. Y luego se 
// actualiza dicho producto sumándonle +1. Se hace agarrando dicho parámetro que es el id del producto actual que se está 
// seleccinando y se le da el valor de prev (que es la lista de productos) y hace que busque dicho en esa lista el id que 
// se seleccionó y se le suma +1. De esta manera de 0 ahora será 1.

// Calcular Precio Total del Carro:
// Se crea una función llamada getTotalCartAmount que tiene una variable que se inicializa con 0. Se crea un bucle 
// for el cual recorre el objeto cartItems (el objeto con 35 valores igualados a 0 ) y cada uno es representado por 
// la variable "item" o mejor dicho item representa . Dentro hay una condicional la cual busca de todos los elementos del cartItems y si el valor 
// de los items es mayor a 0. Entonces se busca de todos los elementos del json all_product aquel que tenga el id 
// igual al item

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
  let cart ={};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;       
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const[cartItems,setCartItems]  = useState(getDefaultCart());  
  const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))    
  }
  const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
  }

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){                
        let itemInfo = all_product.find((product)=>product.id === Number(item))        
        totalAmount += itemInfo.new_price * cartItems[item];        
      }                  
    }
    console.log(totalAmount);        
    return totalAmount;
  }

  const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+=cartItems[item];
      }
    }
    return totalItem;
  }

  const handleSendToWhatsApp = () => {
    const total = getTotalCartAmount(); // Asegúrate que esta función retorna un número
    const message = `Hola! Mi total de compra es $${total}`;
    const phoneNumber = "51950203355"; // Asegúrate de que tiene el código de país (51 para Perú)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  

  const contextValue = {handleSendToWhatsApp, getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
};

export default ShopContextProvider;
