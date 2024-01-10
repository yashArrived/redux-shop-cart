import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {

  const {cart} = useSelector((state)=>state)
  const [totalAmount,setTotalamount] = useState(0);


  useEffect(()=>{
    setTotalamount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])

  return <div>

    {

    cart.length > 0 ? 
    (
    <div className="flex  mr-3 ">
  
    <div>
      {
        cart.map((item,index) => {
          return (
            <CartItem key={item.id} item={item} Itemindex={index}/>
          )
        })
      }
       </div>
       <div>

           <div className=" flex flex-col gap-2 ml-3 justify-left items-left mt-9 max-h-[80px]">
            <div className="text-3xl font-semibold"> 
              Your Cart
            </div>
            <div className="text-4xl font-bold text-green-700 "><h1>Summary</h1></div>
            <p>
              <span>Total Item : {cart.length}</span>
            </p>
            <div>
              <p>Total Amount : ${totalAmount}</p>
            </div>
            <div className="flex w-full bg-green-600 text-white p-3 items-center justify-center rounded hover:bg-white hover:border-green-600 hover:border-2 hover:text-green-600">
              Checkout Now
            </div>
           </div>

       </div>
       </div>
       
       )
    :
    (  <div > <h1> CART EMPTY</h1>
    
    <Link to={'/'}><button>Shop Now</button></Link>
     </div>)
    
    }

  </div>;
};

export default Cart;
