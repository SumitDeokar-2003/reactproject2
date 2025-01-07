import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import { Children } from "react";
import Courses from "./components/Courses";
import Mocktest from "./components/Mocktest";
import Reports from "./components/Reports";
import Notfound from "./components/Notfound";
import Header from "./components/Header"
import Footer from "./components/Footer"
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mock-test",
        element: <Mocktest />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path:'*',
    element:<Notfound/>
  }
]);
function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
