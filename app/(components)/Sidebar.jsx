import Image from "next/image";
import React from "react";

const menuItems = [
  { icon: HomeIcon, label: "Home" },
  { icon: DashboardIcon, label: "Dashboard" },
  { icon: FilesIcon, label: "Files" },
  { icon: FilesIcon2, label: "Files" },
  { icon: DashboardIcon2, label: "Dashboard" },
];


// SVGs icon
function HomeIcon(props) {
  return (
    <Image
      src="/aside/home.svg"
      alt="Home"
      className="w-[15px] cursor-pointer h-[16px]"
      width={10000}
      height={1000}
    />
  );
}
function DashboardIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-75 ease-in"
    >
      <mask
        id="mask0_1_5165"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_5165)">
        <path
          d="M1.38477 20.2307V18.7308H22.6155V20.2307H1.38477ZM4.30784 17.7308C3.80271 17.7308 3.37514 17.5558 3.02514 17.2058C2.67514 16.8558 2.50014 16.4282 2.50014 15.9231V5.53851C2.50014 5.03339 2.67514 4.60583 3.02514 4.25583C3.37514 3.90584 3.80271 3.73083 4.30784 3.73083H19.6924C20.1975 3.73083 20.6251 3.90584 20.9751 4.25583C21.3251 4.60583 21.5001 5.03339 21.5001 5.53851V15.9231C21.5001 16.4282 21.3251 16.8558 20.9751 17.2058C20.6251 17.5558 20.1975 17.7308 19.6924 17.7308H4.30784ZM4.30784 16.2308H19.6924C19.7693 16.2308 19.8398 16.1987 19.904 16.1346C19.9681 16.0705 20.0001 16 20.0001 15.9231V5.53851C20.0001 5.46158 19.9681 5.39106 19.904 5.32696C19.8398 5.26284 19.7693 5.23079 19.6924 5.23079H4.30784C4.23091 5.23079 4.16038 5.26284 4.09627 5.32696C4.03217 5.39106 4.00012 5.46158 4.00012 5.53851V15.9231C4.00012 16 4.03217 16.0705 4.09627 16.1346C4.16038 16.1987 4.23091 16.2308 4.30784 16.2308Z"
          fill="#637381"
          className="group-hover:fill-royalBlue"
        />
      </g>
    </svg>
  );
}
function DashboardIcon2(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-75 ease-in"
    >
      <mask
        id="mask0_1_5165"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_5165)">
        <path
          d="M1.38477 20.2307V18.7308H22.6155V20.2307H1.38477ZM4.30784 17.7308C3.80271 17.7308 3.37514 17.5558 3.02514 17.2058C2.67514 16.8558 2.50014 16.4282 2.50014 15.9231V5.53851C2.50014 5.03339 2.67514 4.60583 3.02514 4.25583C3.37514 3.90584 3.80271 3.73083 4.30784 3.73083H19.6924C20.1975 3.73083 20.6251 3.90584 20.9751 4.25583C21.3251 4.60583 21.5001 5.03339 21.5001 5.53851V15.9231C21.5001 16.4282 21.3251 16.8558 20.9751 17.2058C20.6251 17.5558 20.1975 17.7308 19.6924 17.7308H4.30784ZM4.30784 16.2308H19.6924C19.7693 16.2308 19.8398 16.1987 19.904 16.1346C19.9681 16.0705 20.0001 16 20.0001 15.9231V5.53851C20.0001 5.46158 19.9681 5.39106 19.904 5.32696C19.8398 5.26284 19.7693 5.23079 19.6924 5.23079H4.30784C4.23091 5.23079 4.16038 5.26284 4.09627 5.32696C4.03217 5.39106 4.00012 5.46158 4.00012 5.53851V15.9231C4.00012 16 4.03217 16.0705 4.09627 16.1346C4.16038 16.1987 4.23091 16.2308 4.30784 16.2308Z"
          fill="#637381"
          className="group-hover:fill-royalBlue"
        />
      </g>
    </svg>
  );
}
function FilesIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all"
    >
      <mask
        id="mask0_1_5209"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_5209)">
        <path
          d="M16.2557 20.5L15.2115 19.4557L16.7865 17.8557L15.2115 16.2807L16.2557 15.2115L17.8557 16.8115L19.4307 15.2115L20.5 16.2807L18.9 17.8557L20.5 19.4557L19.4307 20.5L17.8557 18.925L16.2557 20.5ZM6.25 19C6.59743 19 6.89263 18.8785 7.13558 18.6356C7.37853 18.3926 7.5 18.0974 7.5 17.75C7.5 17.4025 7.37853 17.1073 7.13558 16.8644C6.89263 16.6214 6.59743 16.5 6.25 16.5C5.90255 16.5 5.60735 16.6214 5.3644 16.8644C5.12145 17.1073 4.99997 17.4025 4.99997 17.75C4.99997 18.0974 5.12145 18.3926 5.3644 18.6356C5.60735 18.8785 5.90255 19 6.25 19ZM6.25 20.5C5.48718 20.5 4.83815 20.2323 4.3029 19.6971C3.76763 19.1618 3.5 18.5128 3.5 17.75C3.5 16.9871 3.76763 16.3381 4.3029 15.8029C4.83815 15.2676 5.48718 15 6.25 15C6.85383 15 7.3971 15.1772 7.8798 15.5317C8.36248 15.8862 8.69165 16.3551 8.8673 16.9385C9.5814 16.8128 10.1731 16.4737 10.6423 15.9211C11.1115 15.3686 11.3461 14.7282 11.3461 14V10.1442C11.3461 8.83141 11.8096 7.71154 12.7365 6.78463C13.6635 5.85769 14.7833 5.39423 16.0961 5.39423H17.6116L15.7865 3.56923L16.8557 2.5L20.5 6.14423L16.8557 9.78843L15.7865 8.74423L17.6019 6.8942H16.0961C15.1923 6.8942 14.4247 7.20991 13.7933 7.84133C13.1618 8.47274 12.8461 9.24038 12.8461 10.1442V14C12.8461 15.1333 12.4689 16.1208 11.7144 16.9625C10.9599 17.8041 10.0211 18.3012 8.89805 18.4538C8.74293 19.0576 8.4189 19.5496 7.92595 19.9298C7.433 20.3099 6.87435 20.5 6.25 20.5ZM4.54422 8.78843L3.5 7.74423L5.075 6.14423L3.5 4.56923L4.54422 3.5L6.14423 5.1L7.71922 3.5L8.78842 4.56923L7.18843 6.14423L8.78842 7.74423L7.71922 8.78843L6.14423 7.21343L4.54422 8.78843Z"
          fill="#637381"
          style={{ transition: "fill 0.3s ease-in-out" }}
          className="group-hover:fill-royalBlue"
        />
      </g>
    </svg>
  );
}
function FilesIcon2(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all"
    >
      <mask
        id="mask0_1_5209"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_5209)">
        <path
          d="M16.2557 20.5L15.2115 19.4557L16.7865 17.8557L15.2115 16.2807L16.2557 15.2115L17.8557 16.8115L19.4307 15.2115L20.5 16.2807L18.9 17.8557L20.5 19.4557L19.4307 20.5L17.8557 18.925L16.2557 20.5ZM6.25 19C6.59743 19 6.89263 18.8785 7.13558 18.6356C7.37853 18.3926 7.5 18.0974 7.5 17.75C7.5 17.4025 7.37853 17.1073 7.13558 16.8644C6.89263 16.6214 6.59743 16.5 6.25 16.5C5.90255 16.5 5.60735 16.6214 5.3644 16.8644C5.12145 17.1073 4.99997 17.4025 4.99997 17.75C4.99997 18.0974 5.12145 18.3926 5.3644 18.6356C5.60735 18.8785 5.90255 19 6.25 19ZM6.25 20.5C5.48718 20.5 4.83815 20.2323 4.3029 19.6971C3.76763 19.1618 3.5 18.5128 3.5 17.75C3.5 16.9871 3.76763 16.3381 4.3029 15.8029C4.83815 15.2676 5.48718 15 6.25 15C6.85383 15 7.3971 15.1772 7.8798 15.5317C8.36248 15.8862 8.69165 16.3551 8.8673 16.9385C9.5814 16.8128 10.1731 16.4737 10.6423 15.9211C11.1115 15.3686 11.3461 14.7282 11.3461 14V10.1442C11.3461 8.83141 11.8096 7.71154 12.7365 6.78463C13.6635 5.85769 14.7833 5.39423 16.0961 5.39423H17.6116L15.7865 3.56923L16.8557 2.5L20.5 6.14423L16.8557 9.78843L15.7865 8.74423L17.6019 6.8942H16.0961C15.1923 6.8942 14.4247 7.20991 13.7933 7.84133C13.1618 8.47274 12.8461 9.24038 12.8461 10.1442V14C12.8461 15.1333 12.4689 16.1208 11.7144 16.9625C10.9599 17.8041 10.0211 18.3012 8.89805 18.4538C8.74293 19.0576 8.4189 19.5496 7.92595 19.9298C7.433 20.3099 6.87435 20.5 6.25 20.5ZM4.54422 8.78843L3.5 7.74423L5.075 6.14423L3.5 4.56923L4.54422 3.5L6.14423 5.1L7.71922 3.5L8.78842 4.56923L7.18843 6.14423L8.78842 7.74423L7.71922 8.78843L6.14423 7.21343L4.54422 8.78843Z"
          fill="#637381"
          style={{ transition: "fill 0.3s ease-in-out" }}
          className="group-hover:fill-royalBlue"
        />
      </g>
    </svg>
  );
}


const Sidebar = () => {
  return (
    <div className="px-4 sm:px-0 w-[112px] bg-white relative">
      <div className="flex items-center px-2 w-[104px] absolute sm:static h-[70px] left-0 gap-[12px] transform translate-y-[-70px] bg-white">
        <div>
          <Image
            src="/svgs/logo.svg"
            className="w-[25px] h-[79px]"
            alt="Logo"
            width={10000}
            height={1000}
          />
        </div>
        <h1 className="font-semibold text-[19px] sm:text-[24px]">Futr.</h1>
      </div>
      <div>
        <div className="transform translate-y-[-20px] sm:translate-y-[-80px]">
          {/* Parent */}
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col items-center mt-[20px] gap-[8px] group"
            >
              <div className="w-[31px] h-[32px] rounded-[4px] duration-75 group-hover:bg-lightBlue flex items-center justify-center">
                <item.icon />
              </div>
              <h4 className="text-[14px] cursor-pointer font-normal sm:font-bold text-cloudySky duration-75 group-hover:text-royalBlue">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
        <Image
          src="/aside/Userpic.png"
          className="w-[40px] h-[40px] absolute bottom-0 right-0 left-0 mx-auto cursor-pointer radius-[99px]"
          width={2000}
          height={2000}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Sidebar;
