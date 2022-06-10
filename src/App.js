import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./templates/Header/Header";
import Footer from "./templates/Footer/Footer";

//pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Details from "./pages/Details/Details";
import DanhMucKhoaHoc from "./pages/DanhMuc/DanhMucKhoaHoc";
import TimKiemKhoaHoc from "./pages/Search/TimKiemKhoaHoc";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/" component={Home}></Route>
      <Route
        exact
        path="/chitietkhoahoc/:iDKhoaHoc"
        component={Details}
      ></Route>
      <Route exact path="/danhmuc/:id" component={DanhMucKhoaHoc}></Route>
      <Route exact path="/thongtinnguoidung" component={Profile}></Route>
      <Route
        exact
        path="/timkiemkhoahoc/:tenKhoaHoc"
        component={TimKiemKhoaHoc}
      ></Route>

      <Route exact path="/dangnhap" component={Login}></Route>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
