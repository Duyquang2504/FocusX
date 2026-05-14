import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center bg-slate-200">
      <img src="404NotFound.png" alt="not found" className="max-w-full  w-80" />
      <p className="text-xl font-semibold">Không tìm thấy được trang !</p>
      <a
        href="/"
        className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark"
      >
        Quay trở lại trang chủ
      </a>
    </div>
  );
};

export default NotFound;
