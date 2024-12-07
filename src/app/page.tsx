"use client";
import Hero from "@/components/Hero";
import About from "@/components/about";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function App() {
  return (
    <div className="bg-gray-100 w-full text-black">
      <nav className="flex justify-start space-x-6 align-middle items-center p-6 bg-primary">
        <Button
          className={buttonVariants({ variant: "link", size: "default" })}
        >
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          className={buttonVariants({ variant: "link", size: "default" })}
        >
          <Link href="/contractor">Contractor</Link>
        </Button>
        <Button
          className={buttonVariants({ variant: "link", size: "default" })}
        >
          <Link href="/investigator">Investigator</Link>
        </Button>
        <Button
          className={buttonVariants({ variant: "link", size: "default" })}
        >
          <Link href="/login">Login</Link>
        </Button>
      </nav>
      <Hero />
      <About />
    </div>
  );
}

export default App;
