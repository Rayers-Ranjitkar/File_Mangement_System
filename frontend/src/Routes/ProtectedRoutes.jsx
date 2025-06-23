import { useEffect, useState } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
  //bad code: see notion as: any function calls (like useNavigate() ) inside render run immediately , so 1st render phase mai this runs,changes url redirects to another routes and runs multiple renders and runs infinite loop ultimately confusing react
  // const isAuthenticated = true;
  //   if (localStorage.getItem("token") == null) {
  //     isAuthenticated = false;
  //   } else {
  //     isAuthenticated = true;
  //   }

  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  const token = localStorage.getItem("token");
  useEffect(()=>{

    if(!token){
        navigate('/login');
    }
  },[]);

  return (
  <>
  {children}
  </>
  );
};

export default ProtectedRoutes;
