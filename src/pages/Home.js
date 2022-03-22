import React from "react";
import BigDisplay from "../components/BigDisplay";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BigDisplay />
      <Search />
    </div>
  );
};

export default Home;
