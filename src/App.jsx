import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "./Authentication/Login/Login";
import Signup from "./Authentication/Signup/Signup";
import Header from "./pages/Home/header/header";
import Slider from "./pages/Home/slider/slider";
import Footer from "./pages/Home/footer/footer";
import Value from "./pages/Home/value/value";
import Contact from "./pages/Home/contact/contact";
import Features from "./pages/Home/features/features";
import CTA from "./pages/Home/cta/Cta";

function Home() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Features/>
      <Value/>
      <Contact/>
      <CTA/>
      <Footer/>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element:<LoginForm/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/home",
    element: <Home />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
