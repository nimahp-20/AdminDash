import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import routes from "./routes";
import './App.css'

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
