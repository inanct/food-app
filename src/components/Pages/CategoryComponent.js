import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryComponent = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('https://world.openfoodfacts.org/categories.json')
      .then(response => {
        const allProducts = response.data.products;
        setProducts(allProducts);
        console.log("allProducts")
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };



  

  return (
    <div>
     

      <h2>Ürünler</h2>
      <ul>
        {products && products.map((product, index) => (
          <li key={index}>{product.product_name}</li>
        ))}
        
      </ul>
    </div>
  );
};

export default CategoryComponent;
