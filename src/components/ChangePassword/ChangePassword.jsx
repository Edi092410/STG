import React from "react";

export default function ChangePassword() {
  return (
    <div className="flex justify-center min-h-[80vh]  items-center">
      <div className="w-96">
        <div className="float-left text-xl font-bold w-full mb-5">
          Та нууц үгээ шинэчлэх гэж байна
        </div>
        <div className=" text-blue-500 font-bold w-full mb-3">
          Системээс өгсөн нууц үг
        </div>
        <input
          type="text"
          className="w-full h-12  border border-gray-600"
        ></input>
        <button className=" w-full h-12 bg-slate-800 text-white rounded-3xl mt-6">
          Цааш
        </button>
      </div>
    </div>
  );
}
