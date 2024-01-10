import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart}= useSelector((state)=> state)
  return <div>

        <nav className="flex flex-row justify-between mx-auto h-20 w-full items-center ">
          <NavLink to="/"><p className="font-green text-green-600 ml-5">Logo</p></NavLink>
            <div className="flex items-center  text-slate-100  row font-medium space-x-3 mr-5">
              <p>Home</p>
              <NavLink to="/cart">
                <div className="relative">
              <p className="mx-auto">Cart </p>
              <span className="absolute -top-1 -right-5 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white"> {cart.length}</span>
              </div>
              </NavLink>
            </div>
        </nav>

  </div>;
};

export default Navbar;
