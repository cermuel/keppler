import Docs from "./sections/Docs";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Who from "./sections/who-using-it";

function App() {
  return (
    <main className="relative m-0 p-0 bg-gradient-to-r from-[#330867] to-[#31a7bb]">
      <Home />
      <Features />
      <Docs />
      <Who />
      <Footer />
    </main>
  );
}

export default App;
