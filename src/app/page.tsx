"use client";
import { useState } from "react";
import Home from "@/components/home";
import About from "@/components/about";
import { LoginForm } from "@/components/login-form";

function App() {
  const [activePage, setActivePage] = useState("Home");

  function renderPage() {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Login":
        return <LoginForm />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="bg-slate-900 h-screen flex flex-col text-white">
      {/* Navbar */}
      <nav className="bg-slate-800 flex items-middle px-5 h-20">
        <div className="flex space-x-4">
          <button
            onClick={() => setActivePage("Home")}
            className={`${
              activePage === "Home" ? "text-blue-400" : "text-white"
            } hover:text-blue-400`}
          >
            Home
          </button>
          <button
            onClick={() => setActivePage("About")}
            className={`${
              activePage === "About" ? "text-blue-400" : "text-white"
            } hover:text-blue-400`}
          >
            About
          </button>
          <button
            onClick={() => setActivePage("Login")}
            className={`${
              activePage === "Login" ? "text-blue-400" : "text-white"
            } hover:text-blue-400`}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow">{renderPage()}</div>
    </div>
  );
}

export default App;
