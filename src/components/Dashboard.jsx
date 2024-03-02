import React from "react";
import ChartA from "./ChartA";
import ChartB from "./ChartB";

function Dashboard() {
  return (
    <div className="px-10 py-14 w-full flex flex-col">
      <h2 className=" mb-5 bg-[#FF6347] px-5 py-3  w-full text-xl font-bold">
        Dashboard
      </h2>
      <div className=" flex space-x-8 mb-10">
        <div className=" h-[150px] w-[280px] border border-gray-500 rounded flex flex-col shadow-md  items-start justify-center p-4 mt-5">
          <span className=" text-xl font-semibold">Sushant Sharma</span>
          <span className=" font-light">Your Balance is RS 1000000</span>
        </div>
        <div className=" h-[150px] w-[280px] border border-gray-500 rounded flex flex-col shadow-md   items-start justify-center p-4 mt-5">
          <span className=" text-xl font-semibold">Hari Prasad </span>
          <span className=" font-light">Your Balance is RS 450000</span>
        </div>
        <div className=" h-[150px] w-[280px] border border-gray-500 rounded flex flex-col shadow-md   items-start justify-center p-4 mt-5">
          <span className=" text-xl font-semibold">Ram Baran Yadav</span>
          <span className=" font-light">Your Balance is RS 390000</span>
        </div>
        <div className=" h-[150px] w-[280px] border border-gray-500 rounded flex flex-col shadow-md  items-start justify-center p-4 mt-5">
          <span className=" text-xl font-semibold">Sneha Thakur</span>
          <span className=" font-light">Your Balance is RS 700000</span>
        </div>
        <div className=" h-[150px] w-[280px] border border-gray-500 rounded flex flex-col shadow-md  items-start justify-center p-4 mt-5">
          <span className=" text-xl font-semibold">Sanu Acharya</span>
          <span className=" font-light">Your Balance is RS 390000</span>
        </div>
      </div>
      <div className=" flex mb-10">
        <div className=" flex w-full flex-col space-x-8 w-full  h-[40vh]">
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
        <div className=" h-[150px] w-[90vh] border border-gray-500 rounded flex flex-col  items-start justify-center p-4 mt-5">
          <h2 className=" text-xl font-bold mb-2">Activity</h2>
          <li>You sent Rs 10000 to your mom.</li>
          <li>You received Rs 20000 from suman singh.</li>
          <li>You credit Rs 40000 from sarita pandey.</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
