import React from "react";
import { FaEyeSlash } from "react-icons/fa";
export default function SecondLogin() {
  return (
    <div className="flex justify-center min-h-[80vh]  items-center">
      <div className="w-96">
        <div className="float-left text-xl font-bold w-full mb-5">
          Та GTS системд нэвтрэх гэж байна
        </div>
        <div className=" text-blue-500 font-bold w-full mb-3">Цахим шуудан</div>
        <input
          type="text"
          className="w-full h-12  border border-gray-600"
        ></input>

        <div className=" relative mt-6">
          <FaEyeSlash className=" h-5 w-5 absolute left-[90%] top-[30%]" />
          <input
            type="password"
            className="w-full h-12  border border-gray-600"
          ></input>
        </div>
        <div className="text-right text-blue-500 font-bold w-full mb-3">
          Нууц үг мартсан
        </div>
        <button className=" w-full h-12 bg-slate-800 text-white rounded-3xl mt-6">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
