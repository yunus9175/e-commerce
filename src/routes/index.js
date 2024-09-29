import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../layouts";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="h-96 w-full flex justify-center items-center text-2xl md:text-3xl font-bold">
              Page Not Found 404!
            </div>
          }
        />
      </Route>
    </>
  )
);
