import React, { useState, useEffect } from "react";
//import Axios from "axios";
import "./../styles/App.css";
import 'regenerator-runtime/runtime'



const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true);

  const func = async () => {
    try{
      setLoading(true);
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json();
        if(data.products.length>=1){
          setData(data.products)
        }
        else{
          setData([])
        }
        console.log(data.products.length)
        console.log(data.products)
    }
    catch(error){
      setError(error)
        console.log("An error occurred:",error)
    }
    finally {
      setLoading(false);
    }
}
useEffect(()=>{
  func()
},[])

  return (
    <div>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )
        }
        {error &&
          <p>{error}</p>
        }
    </div>
  );
};

export default App;