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
        const response = await fetch('https://dummy.com/products');
        const result = await response.json();
        console.log(result)
        setData(result);
      }catch (error) {
        console.log(error);
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
        <h1>Loading...</h1>
      ) : (
        <pre><h1>{JSON.stringify(data, null, 2)}</h1></pre>
      )}
    </div>
    </div>
  );
};

export default App;
