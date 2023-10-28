import React, { useState } from "react";
import Logo from "./../assets/Logo.png";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Activity,
  HelpingHand,
  CircleDollarSignIcon,
  BanknoteIcon,
  BarChart2,
  ArrowRightLeft,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    icons: LayoutDashboard,
  },
  {
    name: "Activity",
    icons: Activity,
  },
  {
    name: "Help Center",
    icons: HelpingHand,
  },
  {
    name: "Expenditure",
    icons: CircleDollarSignIcon,
  },
  {
    name: "Income",
    icons: BanknoteIcon,
  },
  {
    name: "Analytics",
    icons: BarChart2,
  },
  {
    name: "Transaction",
    icons: ArrowRightLeft,
  },
];

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "8%" },
};

function NavigationBar() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className="px-10 py-12 flex flex-col border border-r-1 w-1/5 h-screen items-center relative"
    >
      <div className="logo-div flex space-x-1  items-center">
        <img src={Logo} className=" h-16" />
        <span className={isExpanded ? "block" : "hidden"}>
          <p className=" font-bold text-xl">Capital Tracker</p>
        </span>
      </div>
      <div>
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className=" w-6 h-6 bg-[#FF6347] rounded-full absolute -right-3 top-[7.5vh] flex items-center justify-center hover: cursor-pointer "
        >
          <ChevronRight size={20} strokeWidth={3} />
        </div>
      </div>
      <div className=" mt-9 flex flex-col space-y-5 hover: cursor-pointer">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              " flex space-x-8  items-center px-10 py-3 rounded-md" +
              (activeNavIndex === index
                ? " bg-[#FF6347] text-white font-semibold"
                : " ")
            }
            onClick={() => setActiveNavIndex(index)}
          >
            <item.icons size={32} />
            <span className={isExpanded ? "block" : "hidden"}>
              {item?.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NavigationBar;
