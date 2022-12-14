import React from 'react';
import SearchEngine from "./SearchEngine";
import image from "./images/galaxy2.jpeg";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat"
        }}
        class="container main-container"
      >
        <SearchEngine city="Long Beach"/>
      </div>
    </div>
  );
}
