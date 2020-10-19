import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Environment from "./components/Environment";
import Economics from "./components/Economics";
import AboutUs from "./components/AboutUs";
import FAQs from "./components/FAQs";
import QuotesPage from "./components/QuotesPage";
import Footer from "./components/Footer";
import AdminHomePage from "./components/AdminHomePage"


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/environment" component={Environment} />
        <Route path="/economics" component={Economics} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/quotes" component={QuotesPage} />
        <Route path="/adminhome" component={AdminHomePage} />

      </Switch>
      <Footer />
    </>
  );
};

export default App;