import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp"; /* It's like a utility function like we've done in API right. We are just defining an object like a JSON schema, list of routes, an axios instance, Firebase config : building a plain JavaScript object that the router library will use to figure out what to render. since, we aren't returning jsx we don't need let index = () => i.e functinal component of index */
import PersonalDashboard from "../Pages/PersonalDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "*" /* undefined browser path halda redirect to this bhaneko ho nice */,
    element: (
      <Navigate to="/login" replace />
    ) /* User visits /dashboard (bad path). -> Your router redirects with: -> <Navigate to="/login" /> -> The history stack is now: ["/dashboard","/login"] -> User hits the browser Back button. -> They return to /dashboard — which again redirects to /login. -> This can create a loop or annoying behavior. , but with replace -> The history stack becomes: ["/login"] -> i.e.  "/dashboard" is replaced -> so when he hits back button he cannot navigate back to the /dashboard */,
    /* Navigate Component is generally used to redirect during render. This is a component and cannot be used as a function i.e. callback function after btn click.*/
  },
  {
    path: "/personalDashboard",
    element: <PersonalDashboard />,
  },
]);

export default router;
