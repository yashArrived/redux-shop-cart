import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from '../components/Product'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading,setLoading] = useState(false);
  const [posts , setPosts] = useState([]);

  async function fetchdata(){
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await  res.json();

      setPosts(data);
          console.log(API_URL);
          // console.log(posts);
          


    } catch (error) {
      console.log("error h bhai")

    }
    setLoading(false);

  }

  useEffect(()=> {
        fetchdata()
  },[])



  return <div>
    {
      loading ? (<Spinner/>) : (
        <div > 
          {posts.length > 0 
                            ? (
                                <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ld:grid-cols-4 max-w-6xl p-2 mx-auto  min-h-[80vh] space-y-10 space-x-5">
     {posts.map((posts)=> (

      <Product posts = {posts} key={posts.id}/>
                                ))
                                }</div>
                            ) : (<div>No POSST </div> )
          }
        </div>
      )
    }


  </div>;
};

export default Home;
