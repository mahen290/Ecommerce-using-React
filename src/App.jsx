import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import Logo from "./assets/Indian_Flag.jpg"
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import Search from './components/Search';

function App() 
{
  const [ count, setCount ] = useState ( 0 );
  const [ data, setData ] = useState ( [] );
  const [ searchQuery, setSearchQuery ] = useState ('');
  
  useEffect( () => {
    async function fetchData()
    {
      let response = await axios.get("https://fakestoreapi.com/products")
      .then( (res) => 
      {
        setData(res.data);
      })
      .catch( (err) => 
      {
        console.error('something went wrong', err);
      })
    }
    fetchData();
  },[])

  const handleSearch = (query) =>
    {
      setSearchQuery(query);
    };

  const filteredData = data.filter( ( data ) => 
    data.title.toLowerCase().includes(searchQuery.toLowerCase() )
  );

  return (
    <div>
      
      <div className = "main-header">
        <img src = { Logo } alt = "Indian_Flag" className = "ind_flag" />
        <h1> Most Welcome In Moogle.Com </h1>
        <h3> India'S top leading E-commerce Portal </h3> 
        <Admin />
      </div>
      
      <div className ="count_wrapper">
        <p> { count } </p>
        <button className = "btn" onClick = { () => setCount ( count + 1 ) }> Increment </button>
        <button className = "btn" onClick = { () => setCount ( count - 1 ) }> Decrement </button>
      </div>
      <Search onSearch = { handleSearch } />
      <div className = "api-data-container">
          { 
            filteredData.map( ( item ) => 
            <Card key = { item.id } source = { item.image } name = { item.title } cost = { item.price }/> )
          }
          <Navbar />
      </div>

    </div>
  );
}

export default App;
