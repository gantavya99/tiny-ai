import Nav from "./components/Nav";
import Price from "./pages/Price";
import Features from "./pages/Features";
import Home from "./pages/Home";
function App() {
  let Component;
  switch(window.location.pathname){
    case"/":
    Component=Home;
    break
    case"/features":
    Component=Features;
    break
    case"/Pricing":
    Component=Price;
    break
  }
  return (
    <div className="App">
     <Nav/>
     <div className="comp"><Component/></div>
    </div>
  );
}

export default App;
