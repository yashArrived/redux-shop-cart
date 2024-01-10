import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import {remove} from "../redux/Slices/cartSlice"

const CartItem = ({item,Itemindex}) => {
  const dispatch = useDispatch();

  const Removefromcarthanndler=()=>{
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
    <Toaster/>
           }

  return <div className="flex  items-center justify-between transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline max-w-[780px]">
    

    <div>
      <img src={item.image} alt="" />
    </div>
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <div>
      <p>{item.price}</p>
      </div>
      <div>
        <button onClick={Removefromcarthanndler}>Delete</button>
      </div>
    </div>
  </div>;
};

export default CartItem;
