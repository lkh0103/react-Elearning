import React, { Component } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card } from "antd";
import { layDanhSachKhoaHoc } from "../../Services";
class Home extends Component {
  render() {
    const contentStyle = {
      width: "100%",
      height: "500px",
    };
    return (
      <div>
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
                  <li data-target="#demo" data-slide-to={1} />
                  <li data-target="#demo" data-slide-to={2} />
                </ul>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://niithanoi.edu.vn/pic/News/lap-trinh-frontend-la-gi.jpg"
                      style={{
                        ...contentStyle,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://cyberlearn.vn/wp-content/uploads/2020/04/tuduycover.jpg"
                      style={{
                        ...contentStyle,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://cyberlab.edu.vn/wp-content/uploads/2018/02/dn5-01.jpg"
                      style={{
                        ...contentStyle,
                      }}
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#demo"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </a>
                <a
                  className="carousel-control-next"
                  href="#demo"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </a>
              </div>
            </div>
          </div>
        </Carousel>
        <section class="text-gray-600 body-font">
          <div class="container px-1 py-20 mx-auto">
            <div class="flex flex-wrap -m-5">
              {this.props.courseList.slice(0, 8).map((item, index) => {
                return (
                  <div class="p-4 lg:w-1/4" key={index}>
                    <div class="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h2 class="tracking-widest text-xs font-medium text-gray-400 mb-1">
                        Khóa Học
                      </h2>
                      <img
                        src={item.hinhAnh}
                        alt=""
                        class="object-cover object-center w-full rounded-md h-40 dark:bg-coolGray-500"
                      ></img>
                      <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        {item.tenKhoaHoc}
                      </h1>
                      <p class="leading-relaxed mb-3">
                        <p>Giảng Viên:</p> {item.nguoiTao.hoTen}
                      </p>
                      <Link
                        to={`/chitietkhoahoc/${item.maKhoaHoc}`}
                        class="text-indigo-500 inline-flex items-center"
                      >
                        Chi tiết khóa học
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            class="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          {item.luotXem}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-3">
              <img
                src="https://cyberlearn.vn/wp-content/uploads/2021/02/certificate__img-1.gif"
                alt=""
              />
            </div> */}
            <div className="col-6">
              <div className="site-card-border-less-wrapper">
                <Card title="Giới Thiệu" bordered={false}>
                  <div className="znColumnElement-innerContent">
                    <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--  tbk-icon-pos--left-title eluidb396e51e ">
                      <h4
                        className="tbk__subtitle iphone:text-xs"
                        itemProp="alternativeHeadline"
                      >
                        CyberLearn đã xây dựng hệ thống bài giảng qua các dự án
                        vô cùng thực tế, trực quan, sinh động, minh hoạ rõ ràng
                        giúp hiểu rõ, hiểu sâu, nhớ dai, áp dụng thực tế tốt.
                        Học qua dự án thực tế, học đi đôi với hành, không lý
                        thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng
                        từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực
                        tế để học viên học xong làm được ngay.
                      </h4>
                    </div>
                  </div>
                </Card>
              </div>
              ,
            </div>
            {/* <div className="col-3">
              <img
                src="https://cyberlearn.vn/wp-content/uploads/2021/02/coding__img.gif"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    layDanhSachKhoaHoc
      .layDanhSachKhoaHoc()
      .then((res) => {
        this.props.dispatch({
          type: "LayDanhSachKhoaHoc",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => {
  return {
    courseList: state.course.courses,
  };
};

export default connect(mapStateToProps)(Home);
