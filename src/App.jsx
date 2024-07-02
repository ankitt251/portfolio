import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/tech" component={Tech} />
          <Route path="/works" component={Works} />
          <Route path="/feedbacks" component={Feedbacks} />
        </Switch>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
