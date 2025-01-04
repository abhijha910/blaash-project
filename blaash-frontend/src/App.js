// App.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
