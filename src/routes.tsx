import { Navigate, createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminProductList from "./pages/admin/list";
import AdminProductAdd from "./pages/admin/add";
import AdminProductEdit from "./pages/admin/edit";
import NotFoundPage from "./pages/notFoundPage";
import HomePage from "./pages/clients/HomePage";
import ProductPage from "./pages/clients/ProductPage";
import ProductDetail from "./pages/clients/ProductDetail";

export const routes=createBrowserRouter([
    {path:'/',element:<LayoutWebsite/>,
    children:[
  
   {
      index:true,
      path:'',
      element:<HomePage/>
   },
   {
      path:'products',
      element:<ProductPage/>
   },
   {
      path:'product/:id',
      element:<ProductDetail/>
   },
    ]},
    {
        path:'admin',
        element:<LayoutAdmin/>,
        children:[
         {index:true,element:<Navigate to='dashboard'/>},
         {
            path:'dashboard',
            element:<h2 className="font-bold text-2xl">Thống kê </h2>
         },
         {
            path:'product',
            element:<AdminProductList/>
         },
         {
            path:'product/add',
            element:<AdminProductAdd/>
         },
         {
            path:'product/:id/edit',
            element:<AdminProductEdit/>
         },
         { path: '*', element: <Navigate to='/404' replace /> } 
        ] 
       
    },
    { path: '404', element: <NotFoundPage /> }
])