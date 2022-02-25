import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import Experiences from "./pages/Experiences";
import Works from "./pages/Works";
import Contact from "./pages/Contact";   
import Nav from "./components/Sidebar/Nav";
import ReactGa from 'react-ga';
import {useEffect} from 'react'
import Blogs from "./pages/Blogs/Blogs";

function App() {

  useEffect(() => {
    ReactGa.initialize("G-P8EEHZM6DY");

    ReactGa.pageview(window.location.pathname);
  })
 
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/experiences" component={Experiences} />       
        <Route exact path="/works" component={Works} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  ); 
}

export default App;
