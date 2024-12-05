"use client";
import { useState, useEffect } from "react";
import { MouseEvent } from "react"; // Import MouseEvent type

export default function Home() {
  const [count, setCount] = useState(0);
  const [buttonText, setButtonText] = useState("Click To Support Us");

  useEffect(() => {
    const fetchCount = async () => {
      const response = await fetch("/api/count");
      if (response.ok) {
        const data = await response.json();
        setCount(data.count);
      }
    };

    fetchCount();
  }, []);

  // Add proper type for the event parameter
  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (buttonText === "Click To Support Us") {
      const newCount = count + 1;

      setCount(newCount);
      setButtonText("Thank You For Supporting Us");

      await fetch("/api/count", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: newCount }),
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-950 text-white h-screen border border-gray-800 rounded-lg p-10">
      <h1 className="text-4xl font-semibold mb-6">Project Ongoing</h1>

      <div className="text-center w-1/2 text-2xl flex items-center justify-center space-x-4 mb-8">
        <p className="font-bold text-lg">Count:</p>
        <p className="text-4xl">{count}</p>
      </div>

      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-xl px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
      >
        {buttonText}
      </button>
    </div>
  );
}
