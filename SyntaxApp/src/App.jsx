import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/Authentication/Login/Login";
import Registration from "./Components/Authentication/Registration/Registration";
import RequireAdmin from "./Components/Authentication/Require/RequireAdmin";
import RequireAuth from "./Components/Authentication/Require/RequireAuth";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Error from "./Components/Home/Error";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <Admin></Admin>
            </RequireAdmin>
          }
        ></Route>
        <Route
          path="/service"
          element={
            <RequireAuth>
              <Service></Service>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/content"
          element={
            <RequireAuth>
              <Content></Content>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
