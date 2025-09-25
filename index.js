import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Log from "./Log";
import Signup from "./Signup";
import Faq from "./Faqs"
import Terms from "./Terms";
import Privacy from "./Privacy";
import Refund from "./Refund";
import Disclaimer from "./Disclaimer";
import Issue from "./Issue";
import Aboutus from "./Aboutus";
import Search from "./Search";
import Membership from "./Membership";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Log />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/issue" element={<Issue />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/search" element={<Search />} />
      <Route path="/membership" element={<Membership />} />
    </Routes>
  </BrowserRouter>
);
