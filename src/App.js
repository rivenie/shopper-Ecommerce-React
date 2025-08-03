import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png"
import woman_banner from "./Components/Assets/banner_women.png"
import kid_banner from "./Components/Assets/banner_kids.png"

// Se usa BrowserRouter para gestionar la navegación sin recargar la página en base a la url.
// Se usa Routes para definir las posibles rutas que tiene la web. En este caso se tienen 7 rutas. No se van a 
// mostrar las 7 rutas al mismo tiempo. Sino que en base al path se mostrará una sola ruta.
// Se usa Route para representar la ruta específica mendiante la url que se muestra. El path es la url y el 
// element es el componente que se mostrará. En el componente Navbar se cambiará la url.
// También hay una ruta anidada. Es decir, una ruta dentro de otra ruta. Esto es para crear urls más organizadas. 
// En este caso la ruta principal/padre es /product y el parámetro dinámico :productId dependerá de ella. 
// El :productId cambiará acorde a la url. Si está en product/1 :prodcutId tendrá como valor 1.
// El :productId se está enviando al componente Product y dicho componente podrá invocarlo con useParams().


function App() {
  return (
    <div>
      <BrowserRouter basename="/shopper-Ecommerce-React">
        <Navbar />
        <Routes>          
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner={men_banner} category = "men"/>}/>
          <Route path="/womens" element={<ShopCategory banner={woman_banner} category = "women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category = "kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
