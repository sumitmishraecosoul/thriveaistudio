import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "../src/pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import ThriveBrands from "./pages/ThriveBrands";
// import VectorAI from "./pages/VectorAI";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-conditions",
        element: <TermsConditions />,
      },
    //   {
    //     path: "services",
    //     element: <Services />,
    //   },
    //   {
    //     path: "portfolio",
    //     element: <Portfolio />,
    //   },
    //   {
    //     path: "blog",
    //     element: <Blog />,
    //   },
    //   {
    //     path: "contact",
    //     element: <Contact />,
    //   },
    ],
  },
]);