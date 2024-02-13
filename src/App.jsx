import { createBrowserRouter ,createHashRouter,RouterProvider} from "react-router-dom"
import LayOut from "./Components/LayOut/LayOut"
import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import Portfolio from "./Components/Porttfolio/Portfolio"
import Contact from "./Components/Contact/Contact"

export default function App(){

let routers= createHashRouter([
  {path:`` ,element:<LayOut/> ,children:[
    {index:true,element:<Home/>},
    {path:`home`,element:<Home/>},
    {path:`contact`,element:<Contact/>},
    {path:`about`,element:<About/>},
    {path:`portfolio`,element:<Portfolio/>}
  ]}
])



  return<>
  <RouterProvider  router={routers}></RouterProvider>
  </>

}