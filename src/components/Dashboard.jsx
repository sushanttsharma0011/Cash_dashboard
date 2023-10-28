import React from "react";
import ChartA from "./ChartA";
import ChartB from "./ChartB";

function Dashboard() {
  return (
    <div className="px-10 py-14 flex flex-col">
      <h2 className=" mb-5 bg-[#FF6347] px-5 py-3  w-full text-xl font-bold">
        Dashboard
      </h2>
      <div className=" flex space-x-8 mb-10">
        <div className=" h-[150px] w-[480px] border border-gray-500 rounded flex flex-col  items-start justify-center p-4 mt-5">
          <span>Sushant Sharma</span>
          <span>Your Balance is RS 1000000</span>
        </div>
        <div className=" h-[150px] w-[480px] border border-gray-500 rounded flex flex-col  items-start justify-center p-4 mt-5">
          <span>Sushant Sharma</span>
          <span>Your Balance is RS 1000000</span>
        </div>
        <div className=" h-[150px] w-[480px] border border-gray-500 rounded flex flex-col  items-start justify-center p-4 mt-5">
          <span>Sushant Sharma</span>
          <span>Your Balance is RS 1000000</span>
        </div>
      </div>
      <div className=" flex">
        <div className=" flex flex-col space-x-8 w-full  h-[40vh]">
          <h2 className=" mb-5 bg-[#FF6347] px-5 py-3  text-xl font-bold">
            Expenses Chart
          </h2>
          <ChartA />
        </div>
        <div className="flex flex-col space-x-36 h-[50vh] w-full ">
          <h2 className=" mb-5 bg-[#FF6347] px-5 py-3 text-xl font-bold">
            Income Chart
          </h2>
          <ChartB />
        </div>
      </div>
      <div>
        <div className=" h-[150px] w-[480px] border border-gray-500 rounded flex flex-col  items-start justify-center p-4 mt-5">
          <span>Sushant Sharma</span>
          <span>Your Balance is RS 1000000</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
