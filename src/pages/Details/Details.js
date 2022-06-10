import React, { Component } from "react";
import { Carousel } from "antd";
import { connect } from "react-redux";
import { layDanhSachKhoaHoc } from "../../Services";
class Details extends Component {
  render() {
    const contentStyle = {
      width: "100%",
    };
    return (
      <div className="container">
        <Carousel autoplay effect="fade">
          <div>
            <div>
              <div id="demo" className=" carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li
                    data-target="#demo"
                    data-slide-to={0}
                    className="active"
                  />
                </ul>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="http://training.technoloader.com/blog/wp-content/uploads/2019/05/React-Developer.jpg"
                      style={{
                        ...contentStyle,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
          <h1 className="text-center mt-12 text-5xl">Chi Tiết Khóa Học</h1>
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center pt-32 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={this.props.courseDetail.hinhAnh}
                alt
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500"
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="mt-8 text-5xl font-bold leading-none sm:text-6xl">
                {this.props.courseDetail.tenKhoaHoc}
              </h1>
              <p className="mt-6 mb-4 text-lg sm:mb-12">
                {this.props.courseDetail.moTa}
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg bg-yellow-300 text-black font-semibold border rounded dark:border-coolGray-100 hover:bg-black hover:text-white"
                >
                  Đăng Kí
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  componentDidMount() {
    layDanhSachKhoaHoc
      .layThongTinKhoaHoc(this.props.match.params.iDKhoaHoc)
      .then((res) => {
        this.props.dispatch({
          type: "LayChiTietKhoaHoc",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});
export default connect(mapStateToProps)(Details);
