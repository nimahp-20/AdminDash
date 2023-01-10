import Home from "./Pages/Home/Home";
import NewUser from "./Pages/NewUser/NewUser";
import UserList from "./Pages/Users/UserList";
import Products from "./Pages/Products/Products";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
