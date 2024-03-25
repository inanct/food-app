import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../API';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios
        .get(API_URL)
        .then((res) => {
            console.log(res.data);
            setRestaurants(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  return (
    <div>
        <h2>Restaurants</h2>
        <ul>
            {
                restaurants.map((restaurant, index) =>(
                    <li key={index}>
                        <p>{restaurant.name}</p>
                        <img src={restaurant.image} alt="" />
                    </li>
                    
                    
                ))
            }
        </ul>
    </div>
  )
}

export default Restaurants