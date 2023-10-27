import React from "react";
import Logo from "./../assets/Logo.png";
import {
  LayoutDashboard,
  Activity,
  HelpingHand,
  CircleDollarSignIcon,
  Clock3,
  BarChart2,
  ArrowRightLeft,
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
    icons: Clock3,
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

function NavigationBar() {
  return (
    <div className="px-10 py-12 flex flex-col border border-r-1 w-1/6 h-screen items-center">
      <div className="logo-div flex space-x-1  items-center">
        <img src={Logo} className=" h-16" />
        <span className=" font-bold text-xl">Capital Tracker</span>
      </div>
      <div className=" mt-9 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div key={index} className=" flex space-x-8 text-xl items-center">
            <item.icons />
            <span>{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationBar;
