import React from 'react'
import menus from '../../data/data'


const PizzaPage = () => {
    
  return (
    <div>
        <h2>Pizzas</h2>
        <ul>
            {menus.filter((menu)=> menu.category === "Pizza"
            ).map((menu, index) => (
                <li key={index}>{menu.name}
                <img src={menu.image} alt="" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PizzaPage