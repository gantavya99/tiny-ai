import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Link from "./components/Link";
import ShortLink from "./components/ShortLink";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  
  const [link,setLink]=useState("");
  const [shortLink, setShortLink] = useState("");
  // console.log(shortLink);
  return (
    <div className="App">
     <Nav />
     <Hero />
     <Link setLink={setLink}
     link={link}
     setShortLink = {setShortLink}/>
     <ShortLink link={link}
     shortLink={shortLink} 
     />

      <Footer/>
    </div>
  );
}
export default App;
