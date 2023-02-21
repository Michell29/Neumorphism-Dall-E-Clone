import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";

import { CreatePost, Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header className="mx-auto rounded-xl shadow-neumorphismlight my-4 w-[95%] flex justify-between items-center sm:px-8 px-4 py-4">
        <Link to="/">
          <img src={logo} alt="" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter shadow-neumorphismlight bg-violet-400 font-medium text-gray-200 px-4 py-2 rounded-xl"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-[92%] m-auto min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
