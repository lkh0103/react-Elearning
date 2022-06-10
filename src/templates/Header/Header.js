import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Axios from "axios";
import { connect } from "react-redux";
import { Input } from "antd";
const { Search } = Input;
export const KEY_TOKEN_CYBERSOFT = "TokenCybersoft";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0";

class Header extends Component {
  onSearch = (value) => {
    window.location.href = `/timkiemkhoahoc/${value}`;
  };
  render() {
    return (
      <div>
        <div>
          <header
            className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 fixed w-full z-10"
            style={{ backgroundColor: "rgb(15 14 14 / 87%)" }}
          >
            <div className="container flex justify-between h-12 mx-auto iphone:contents md:flex lg:flex">
              <Link className="nav-link w-40" to="/">
                <img
                  class="logo-img site-logo-img"
                  src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                  alt="CyberLearn - Học lập trình trực tuyến"
                  title="Học lập trình rành nghề"
                  data-mobile-logo="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                />
              </Link>
              <div className="dropdown">
                <button
                  className="btn bg-white dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Danh Sách Khóa Học
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {this.props.menuDanhMuc.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        className="dropdown-item nav-link drop hover:text-black"
                        to={`/danhmuc/${item.maDanhMuc}`}
                        activeClassName="text-black"
                      >
                        {item.tenDanhMuc}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center md:space-x-4">
                <div className="relative">
                  <Search
                    placeholder="Tìm Kiếm Khóa Học"
                    onSearch={this.onSearch}
                    style={{ width: 200 }}
                  />
                </div>
                <div className="dropdown">
                  <button
                    className="btn bg-white "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="https://www.kindpng.com/picc/m/10-109847_admin-icon-hd-png-download.png"
                      style={{ width: 22 }}
                    />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      type="button"
                      to="/dangnhap"
                      activeClassName="activeLink"
                      className="nav-link"
                    >
                      Đăng Nhập
                    </Link>

                    <Link
                      type="button"
                      to="/thongtinnguoidung"
                      activeClassName="activeLink"
                      className="nav-link"
                    >
                      Thông Tin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      headers: { TokenCyberSoft: TOKEN_CYBERSOFT },
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    })
      .then((res) => {
        this.props.dispatch({
          type: "LayDanhMucKhoaHoc",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => ({
  menuDanhMuc: state.course.menuDanhMuc,
});

export default connect(mapStateToProps)(Header);
