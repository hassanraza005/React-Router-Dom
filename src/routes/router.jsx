import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact.jsx";
import Products from "../pages/Product/Products.jsx";
import Productdetail from "../pages/Productdetail/productdetail.jsx";



const Publicroute = createBrowserRouter([
    {path:"/" , element:<Home/>},
    {path:"/about" , element:<About/>},
    {path:"/contact" , element:<Contact/>},
    {path:"/Products" , element:<Products/>},   
    {path:"/Product/:id" , element:<Productdetail/>},   
])

export default Publicroute