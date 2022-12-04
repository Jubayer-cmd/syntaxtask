import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Login/Login";
import Registration from "./Components/Authentication/Registration/Registration";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
