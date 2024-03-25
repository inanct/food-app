import React from 'react'
import CategoryComponent from './CategoryComponent'
import Restaurants from './Restaurants'
import PizzaPage from './PizzaPage'

const HomePage = () => {
  return (
    <div>
      <CategoryComponent/>
      <Restaurants/>
      <PizzaPage/>
    </div>
  )
}

export default HomePage