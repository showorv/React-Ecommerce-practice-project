import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Applayout } from "./components/layout/Applayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Product } from "./pages/Product";
import { SingleProduct } from "./components/layout/SingleProduct";
import { Cart } from "./components/layout/Cart";
import { AppProvider } from "./components/layout/Context";

const App =()=>{

   const router = createBrowserRouter (
    [
      {
        path: "/",
        element: <Applayout />,
        errorElement: <Error />,
        
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/product",
            element: <Product />
          },
          {
            path: "/singleproduct/:id",
            element: <SingleProduct />
          },
          {
            path: "/cart",
            element: <Cart />
          }
        

        ]
      }
    ]
   )


   return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    
   )
}

export default App;