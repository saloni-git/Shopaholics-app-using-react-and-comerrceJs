 import Products from './Components/Products/Products';
 import Navbar from './Components/Navbar/Navbar';
import Checkout from './Components/CheckOut/Checkout/Checkout';
 import Cart from './Components/Cart/Cart';
 import {BrowserRouter, Switch,Link , Route} from "react-router-dom";
 import {commerce} from './lib/Commerce';
import React , {useState , useEffect} from 'react';
const App = () => {
    const [prod, setProducts]= useState([]);
    const [cart, setCart] = useState([]);
    const [order, setOrder]=useState({});
    const [err,setErr]=useState('');
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };
      const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);
    
        setCart(cart);
      };
      const handleUpadteCartQty = async (productId, quantity) => {
        const {cart}= await  commerce.cart.update(productId, {quantity}) 
        setCart(cart);

      }
     
      const handleEmptyCart = async () => {
        const {cart} = commerce.cart.empty();
        setCart(cart);
      }
      const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);

      }
      const handleCaptureCheckout = async (checkoutTokenId, newOrder) =>{
          try{
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
          }
          catch(error) {
              setErr(error.data.error.message);
          }
      }
    useEffect( () => {
fetchProducts();
fetchCart();
    },[]);
    var len = (!cart)?0:cart.total_items;
    return (
        <div style={{backgroundColor:'#B0C4DE'}}>
        <BrowserRouter>
        <div>
        <Navbar totalItems={len}/>
        <Switch>
            <Route exact path="/">
                  <Products  products= {prod} onAddToCart={handleAddToCart} /> 
           </Route>
           <Route exact path="/cart">
                  <Cart cart ={cart}
                    
                  
                    OnUpadteCartQty={handleUpadteCartQty}
                    OnEmptyCart={handleEmptyCart}
                  />
                  </Route>
                  <Route path="/checkout" exact>
            <Checkout  cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={err}/>
          </Route>
  </Switch>
  </div>
  </BrowserRouter>
        </div>
)

}
export default App;