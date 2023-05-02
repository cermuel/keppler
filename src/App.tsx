import { useLayoutEffect } from "react";
import Docs from "./sections/Docs";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Who from "./sections/who-using-it";

function App() {
  if (window.innerWidth > 768) {
    return (
      <main className="relative m-0 p-0 bg-gradient-to-r from-[#330867] to-[#31a7bb]">
        <Home />
        <Features />
        <Docs />
        <Who />
        <Footer />
      </main>
    );
  } else {
    return (
      <div className="w-full text-center py-8">
        <h1 className="text-2xl font-semibold capitalize">
          Please use a larger screen
        </h1>
      </div>
    );
  }
}

export default App;
