import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AllItem from "./pages/Nestedpage-HomePage/All-items/All-item";
import ActiveItem from "./pages/Nestedpage-HomePage/Active-items/Active-item";
import CompletedItems from "./pages/Nestedpage-HomePage/Completed-items/Completed-items";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="all" element={<AllItem/>} />
          <Route path="active" element={<ActiveItem/>} />
          <Route path="completed" element={<CompletedItems/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
