import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { ReactDOM } from "react";
import Link from "./components/Link";
import ShortLink from "./components/ShortLink";

function App() {
  return (
    <div className="App">
     <Nav />
     <Hero />
     <Link />
     <ShortLink />
    </div>
  );
}
export default App;
