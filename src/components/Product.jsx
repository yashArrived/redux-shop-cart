import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import {add , remove} from "../redux/Slices/cartSlice"
const Product = ({posts}) => {
  // const posts = props.posts;
    const {cart}=useSelector((state)=>state);
    const dispatch = useDispatch();
 
    const Removefromcarthanndler=()=>{
      dispatch(remove(posts.id));
      toast.error("Item removed from cart");
      <Toaster/>
             }

    const addtocarthandler=()=> {

      dispatch(add(posts));
      toast.success("Item added to cart");
      <Toaster/>

    }

  if (!posts) {
    return null; // or handle the scenario when posts is undefined
  }
  return <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline   ">
 

   { <div><p className=" text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{posts.title.split(" ").slice(0,6).join(" ")+"..."}</p></div>}
    <div > <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{posts.description.split(" ").slice(0,10).join(" ")+"..."}</p> </div>
    <div className="h-[180px]">
      <img className="h-full w-full " src={posts.image} alt="" /></div>
      <div className="flex justiy-between gap-12">
    <div className="text-green-600 font-semibold">${posts.price}</div>
    {/* <div>{posts.title}</div> */}


    
      <div className="flex items-center justify-center">
        {
      cart.some((p)=>p.id === posts.id)
      ?(<button className="text-gray-700  border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:text-white hover:bg-gray-700" onClick={Removefromcarthanndler}>Remove Item</button>):
       (<button className="text-gray-700  border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:text-white hover:bg-gray-700" onClick={addtocarthandler}>Add Item</button>)
       }
      </div>
    

  </div>
  </div>

};

export default Product;
