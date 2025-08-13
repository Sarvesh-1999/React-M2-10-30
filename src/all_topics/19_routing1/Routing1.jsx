import { lazy, Suspense } from "react";

import Navbar from "../../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../../pages/Home"
// import Careers from "../../pages/Careers"
// import About from "../../pages/About"
// import NotFound from "../../pages/NotFound";

const Home = lazy(() => import("../../pages/Home"));
const Careers = lazy(() => import("../../pages/Careers"));
const About = lazy(() => import("../../pages/About"));
const NotFound = lazy(() => import("../../pages/NotFound"));

const Routing1 = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading....</h1>}>
       
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      
      </Suspense>
    </div>
  );
};

export default Routing1;
