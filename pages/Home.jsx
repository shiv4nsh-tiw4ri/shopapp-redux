import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);

    }
    catch(error){
        console.log("error in fetching data");
        setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  },[])

  return (
    <div className='flex flex-col w-full h-[80vh]'>
      {
        loading ? 
        (<Spinner/>)
        :
        posts.length > 0 ?
        
          (<div className='flex flex-wrap justify-center'>
           { 
            posts.map( (post) => (
              <Product key={posts.id} post={post}/>
            ))
            }
          </div>)
          :
          (
            <div className='flex justify-center items-center'>
              <p>No Data Found</p>
            </div>  
          )
        
      }
    </div>
  )
};

export default Home
