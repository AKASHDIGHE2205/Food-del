import React, { useState } from 'react'
import "./Home.css";
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
const Home = () => {
  const [category, setCatagory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCatagory={setCatagory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
