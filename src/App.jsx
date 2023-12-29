import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./app.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import Started from "./components/Started/Started";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SignUp from "./components/SignUp/signup";
import forgotpassword from "./components/forgotpassword/forgotpassword"


export const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          </div>
         <Routes>
          <Route  exact path="/"   element={<Hero />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/residencies" element={<Residencies />} />
          <Route path="/values" element={<Values />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/started" element={<Started />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/forgotpassword" element={<forgotpassword/>}/>
         </Routes>
         <Hero/>
         <Companies/>
         <Residencies/>
         <Values/>
         <Contact/>
         <Started/>
         <Footer/>
      </div>
    </Router>
  );
};


