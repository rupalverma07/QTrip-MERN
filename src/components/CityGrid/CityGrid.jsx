import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

const CityGrid = () => {
    const[allCities, setAllCities]= useState([])
    const getAllCities = async() =>{
        const res = await axios.get('http://localhost:9001/api/v1/cities')
        console.log(res)
        setAllCities(res.data)
    }
    useEffect(() =>{
        getAllCities()
    },[])
  return (
    <div class="container">
    <div class="content text-white">
        <div class="row" id="data">
        {allCities.length > 0 ? (allCities.map(item => <Card data={item} />)) : ('No data available')}
        </div>
    </div>
</div>
  )
}

export default CityGrid
