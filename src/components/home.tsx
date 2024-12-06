"use client";
import { Button } from "./ui/button";
function Home() {
  return (
    <div className="flex flex-col justify-center align-middle items-center space-y-12 h-full">
      <h1 className="text-3xl text-white">hello world</h1>
      <Button className="bg-blue-600">Click Me</Button>
    </div>
  );
}
export default Home;
