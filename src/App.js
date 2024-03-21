import React from 'react'
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from "./components/Pages/HomePage"

const App = () => {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App