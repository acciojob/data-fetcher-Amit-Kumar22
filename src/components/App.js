import React, { useState, useEffect } from 'react';
let regeneratorRuntime =  require("regenerator-runtime");
//import axios from 'axios';
//let baseURL = "https://dummy.com/products"
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result);
      }catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre><h1>{JSON.stringify(data, null, 2)}</h1></pre>
      )}
    </div>
    </div>
  );
};

export default App;
