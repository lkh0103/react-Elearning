import React, { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default function Profile(props) {
  return (
    <div
      className="pt-28 pb-11 container iphone:pt-48
    "
    >
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Thông Tin Cá Nhân" className="pt-20 pb-36" key="1">
          <div className="card container w-96">
            <div className="card-body">
              <h3 className="card-title">Email:</h3>
              <h3 className="card-title">Họ Tên:</h3>
              <h3 className="card-title">Số Điện Thoại:</h3>
              <h3 className="card-title">Tài Khoản:</h3>
              <h3 className="card-title">Mật Khẩu:</h3>

              <a href="#" className="btn btn-primary">
                Cập Nhật
              </a>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Khóa Học Của Tôi" key="2">
          <div class="card">
            <div class="card-body">
              <section className="py-6 sm:py-12 dark:bg-coolGray-800 dark:text-coolGray-100">
                <div className="mx-auto space-y-8">
                  <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">
                      Các Khóa Học Đã Tham Gia
                    </h2>
                  </div>
                  <div className="grid  grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex flex-col bg-gray-200">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        aria-label="Te nulla oportere reprimique his dolorum"
                      >
                        <img
                          alt
                          className="object-cover w-full h-52 dark:bg-coolGray-500"
                          src="https://source.unsplash.com/200x200/?fashion?1"
                        />
                      </a>
                      <div className="flex flex-col flex-1 p-6">
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                          Thiết Kế Web
                        </h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-coolGray-400">
                          <span>Mô Tả</span>
                        </div>
                      </div>
                      <button type="button" class="btn btn-outline-danger">
                        Hủy
                      </button>
                    </article>
                    <article className="flex flex-col bg-gray-200">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        aria-label="Te nulla oportere reprimique his dolorum"
                      >
                        <img
                          alt
                          className="object-cover w-full h-52 dark:bg-coolGray-500"
                          src="https://source.unsplash.com/200x200/?fashion?1"
                        />
                      </a>
                      <div className="flex flex-col flex-1 p-6">
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                          Lập trình Mobile
                        </h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-coolGray-400">
                          <span>Mô Tả</span>
                        </div>
                      </div>
                      <button type="button" class="btn btn-outline-danger">
                        Hủy
                      </button>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
