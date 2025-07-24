// src/components/Home.js

import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h2>Welcome to {username}’s portfolio!</h2>
      <p>Based in {city}</p>
    </div>
  );
}

export default Home;

