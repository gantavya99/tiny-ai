import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Link from "./components/Link";
import ShortLink from "./components/ShortLink";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  
  const [link,setLink]=useState("");
  return (
    <div className="App">
     <Nav />
     <Hero />
     <Link setLink={setLink}
     link={link}/>
     <ShortLink link={link} />
      <Footer/>
    </div>
  );
}
export default App;
