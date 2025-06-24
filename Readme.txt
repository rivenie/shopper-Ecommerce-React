-Se instaló el react mediante npx create-react-app 
-También se instaló: npm install react-router-dom
-Se ingresó a App.js y se borró el header y la importación del logo
-Se entró a index.html y se cambió el título
-Se crearon las carpetas Components, Context y Pages
-Dentro de Components se crearon las carpetas Assets y Navbar
-Dentro de Navbar se crearon los archivos Navbar.css y Navbar.jsx
-Dentro de Navbar.jsx se escribió el snippet rafce para autocompletar y se importó el Navbar.css
-En App.js se borró className="App" (no el elemento) y dentro de dicho <div> se insertó el elemento Navbar 
inyectandolo escribiendo Navbar (automáticamente identifica el Navbar por haberlo exportado). Al insertarlo 
se importa automáticamente arriba en el App.js. Y se termina escribiendo <Navbar/>.
-Se pone nombre al <div> del Navbar.jsx llamandolo className='navbar'.
-Se llena de imagenes la carpeta Assets de la url https://greatstack.dev/assets/e-commerce-react-app.
-Importamos el logo y cart_icon de la carpeta Assets en Navbar.jsx.
-Colocamos un div dentro de navbar con la clase nav-logo. Dentro colocamos la imagen del logo y un <p> que diga 
SHOPPER.
-Debajo de nav-logo colocamos un ul con el className nav-menu. Dentro del ul colocamos 4 li con los nombres SHOP,
MEN, WOMEN y KIDS. 
-Debajo de nav-menu colovamos otro <div> con className nav-login-cart. Dentro se pondrá un botón que diga Login
y una imagen del cart_icon. 
-Se colocan los estilos css de Navbar.jsx en Navbar.css de navbar, nav-logo, nav-logo p, nav-menu, nav-menu li.
-Se le agrega una etiqueta de <hr/> al lado "SHOP" y también se le agrega estilos.
-Se le agrega también estilos a nav-login-cart y nav-login-cart button.
-Se le agrega la pseudo-clase :active a nav-login-cart button y se le da estilos.
-Se agrega debajo de la imagen de nav-login-cart un div con el className nav-cart-count con un 0. Asimismo, se le
agregan estilos.
-Se realiza una declaración de estado antes del return: const [menu, setMenu] = useState("shop"); y se indica que
cuando se de clic a cualquiera de los li del nav-menu se llama a la función setMenu para cambiar el valor de 
"menu". Cada uno será shop, mens, womens, kids. 
-Luego se le agrega una condicional a cada uno de los valores de li donde si "menu" tiene el valor de su setMenu
respectivamente tendrá el <h/>. De lo contrario solo tendrá <></>. Tendiendo algo parecido a esto:
{menu==="shop"?<hr/>:<></>}. De paso se le quita el <hr/> para que se coloque dinámicamente.
-Ahora se agregará el google fonts al proyecto. Se buscará en google poppins font y se selecciona el Regular 400.
Se copia el link y se pega en public->index.html. Luego se va a src->index.css y se copia el css class en body.
-Dentro de la carpeta Pages creamos 5 archivos jsx: Cart, LoginSignUp, Product, Shop, ShopCategory.
-Luego dentro de App.js se importa "BrowserRouter, Routes, Route". Se autocompletará con el react-router-dom.
-Se importaran las páginas Pages->Shop y Pages->ShopCategory.
-Se colocará la etiqueta <BrowserRouter> y se pondrá dentro el <Navbar> que ya se había colocado. Bajo el <Navbar>
se colocará <Routes> y dentro se pondrá <Route path="/" element={<Shop/>}/>. Debajo habrán otras 3 rutas:   
<Route path="/mens" element={<ShopCategory category = "men"/>}/>, <Route path="/womens" element={<ShopCategory 
category = "women"/>}/>, <Route path="/kids" element={<ShopCategory category = "kid"/>}/>.
-Se importa el Product, Cart y LoginSignUp. Se coloca una ruta anidada. Con el parámetro "product" y dentro un 
parámetro anidado ":productId". Ambos con el elemento Product.
-Bajo la ruta anidada se coloca otras 2 rutas que serán del Cart y LoginSignUp.
-En Navbar.jsx colocalos Link a cada uno de los li. Shop, Men, Women y Kids. Se coloca el "to" el valor del 
setMenu correspondiente. Teniendo una estructura así: <Link to='/'>SHOP</Link>
-Se realiza lo mismo con el button e img del nav-login-cart.
-Se le quita el estilo de subrayado automático con un style textDecoration none.
-Se crea una carpeta nueva llamada Hero dentro de Components. Dentro se crean los archivos Hero.jsx y Hero.css.
-Dentro de Hero.jsx se importan Hero.css, hand_icon.png, arrow.png y hero_image.png
-Se crea todo el elemento div con el className hero y se le coloca un "prop".
-Luego de completar el Hero.jsx se importa en Shop.jsx.
-Ahora se completa Hero.css y se completa en index.css un *{margin 0}
-Se crea una carpeta llamada Popular con su Popular jsx y css
-En Popular.jsx vamos a usar el data.js de Assets. Importandolo de manera que usaremos "data_procuct". 
-También vamos a importar el componente "Item" para poder pasarle parámetros del data.js.
-Luego importamos el Popular.js en Shop.js
-Ahora creamos una nueva carpeta llamada NewCollections con su jsx y css. Lo ponemos luego en Shop.jsx
-Ahora creamos una carpeta llamada NewCollections con su jsx y css. Lo ponemos luego en Shop.jsx
-En NewCollections.jsx vamos a también usar un array de objetos llamado new_collecions.
-Se crea una carpeta NewsLetter con su jsx y css. Se coloca en Shop.jsx.
-Se crea ahora el Footer con Footer.jsx y Footer.css. Esta vez se coloca en el App.js.
-1:25
-1:48 : rutas dinámicas (ver Chat GPT)




