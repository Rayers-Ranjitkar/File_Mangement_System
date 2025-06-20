

/* Importing routing  */
import router from "./Routes/Routes"
import {RouterProvider} from "react-router-dom"


const App = () => {


  return (
    <>
    {/* Confirguring the routes */}
    <RouterProvider router={router} />
  
    
    </>
  )
}

export default App