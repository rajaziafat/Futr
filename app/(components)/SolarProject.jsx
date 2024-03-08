"use client";
import { useState } from "react";

const SolarProject = () => {
  const [openProject, setOpenProject] = useState(false);
   const [selectedProject, setSelectedProject] = useState(null);

   const handleProjectChange = (e) => {
     setSelectedProject(e.target.value);
   };
  return (
    <div className="overflow-x-auto pt-3 px-3">
      <div className="inline-block min-w-full rounded-lg overflow-hidden">
        <table className="relative min-w-full leading-normal">
          <thead>
            <tr className="border-b-2 border-[rgba(145,158,171,0.2)">
              <th className="px-5 pt-2 pb-4  text-left text-[14px] font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider"></th>
              <th className="px-5 pt-2 pb-4  text-left text-[14px] font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider">
                Plant name
              </th>
              <th className="px-5 sm:text-nowrap pt-2 pb-4 order-gray-200  text-left text-[14px] font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider">
                DC capacity
              </th>
              <th className="px-5 pt-2 pb-4  text-left text-[14px] font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 pt-2 pb-4  text-left text-[14px] font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider">
                Inverters
              </th>
              <th className="px-5 pt-2 pb-4  text-left text-[14px] font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider">
                SMBs
              </th>
              <th className="px-5 pt-2 pb-4  text-left text-[14px] font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider">
                Modules
              </th>
              <th className="px-5 pt-2 sm:text-nowrap pb-4 order-gray-200  text-left text-[14px] font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider">
                Inverter transformers
              </th>
              <th className="px-5 pt-2 pb-4  text-left text-[14px] group font-semibold sm:font-bold text-[rgba(145,158,171,1)] uppercase tracking-wider">
                <div className="relative">
                  <div onClick={() => setOpenProject(!openProject)}>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                      >
                        <path
                          d="M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z"
                          fill="#637381"
                          className="group-hover:fill-[#2026D3]"
                        />
                        <path
                          d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z"
                          fill="#637381"
                          className="group-hover:fill-[#2026D3]"
                        />
                        <path
                          d="M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11Z"
                          fill="#637381"
                          className="group-hover:fill-[#2026D3]"
                        />
                      </svg>
                      <span className="group-hover:text-[#2026D3]">
                        Project
                      </span>
                    </button>
                  </div>
                  {openProject && (
                    <div className="z-50 w-[300px] absolute top-[130%] right-0 mt-1 bg-white rounded-md shadow-lg">
                      <label className="block px-4 py-2 font-normal text-[14px] text-[#637381] cursor-pointer">
                        <input
                          type="radio"
                          name="project"
                          value="project1"
                          className="mr-2"
                          checked={selectedProject === "project1"}
                          onChange={handleProjectChange}
                        />{" "}
                        Solar Project
                      </label>
                      <label className="block text-nowrap px-4 font-normal py-2 text-[14px] text-[#637381] cursor-pointer">
                        <input
                          type="radio"
                          name="project"
                          value="project2"
                          className="mr-2"
                          checked={selectedProject === "project2"}
                          onChange={handleProjectChange}
                        />{" "}
                        Transmission line projects
                      </label>
                    </div>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="z-10">
            <tr className="border-b px-5 border-[rgba(145,158,171,0.2)] align-middle">
              <td className="bg-white text-sm">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%] bg-[rgba(255,94,62,0.08)]">
                  <p className="text-[rgba(255,94,62,1)] font-bold text-[14px]">
                    3
                  </p>
                </div>
              </td>
              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] font-normal">
                <p className="text-[rgba(32,38,211,1)] whitespace-no-wrap">
                  Sulekal solar plant
                </p>
                <p className="text-[rgba(145,158,171,1)] whitespace-no-wrap">
                  Rajasthan, India
                </p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] font-normal">
                <p className="text-gray-900 whitespace-no-wrap">14</p>
              </td>
              <td className="sm:text-nowrap px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal">
                <span>14-05-24</span>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>14</p>
              </td>

              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <div className="flex items-center gap-[12px]">
                  <p className="w-[16px] h-[16px] bg-[#8E33FF] rounded-[50%]"></p>
                  <span className="font-bold text-[#8E33FF]">On Project</span>
                </div>
              </td>

              <td className="sm:text-nowrap px-5 pt-5 text-[rgba(33,43,54,1)] pb-2 text-[14px] font-normal text-left">
                <p>ARB—2560</p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>3</p>
              </td>

              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] text-[#00B8D9] font-bold">
                <p className="py-[4px] px-[12px] text-center rounded-full bg-[#CAFDF5]">
                  Solar project
                </p>
              </td>
            </tr>
            <tr className="border-b px-5 border-[rgba(145,158,171,0.2)] align-middle">
              <td className="bg-white text-sm">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%] bg-[rgba(255,94,62,0.08)]">
                  <p className="text-[rgba(255,94,62,1)] font-bold text-[14px]">
                    1
                  </p>
                </div>
              </td>
              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] font-normal">
                <p className="text-[rgba(32,38,211,1)] whitespace-no-wrap">
                  Sulekal solar plant
                </p>
                <p className="text-[rgba(145,158,171,1)] whitespace-no-wrap">
                  Rajasthan, India
                </p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] font-normal">
                <p className="text-gray-900 whitespace-no-wrap">14</p>
              </td>
              <td className="sm:text-nowrap px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal">
                <span>14-05-24</span>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>14</p>
              </td>

              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <div className="flex items-center gap-[12px]">
                  <p className="w-[16px] h-[16px] bg-[#0AD603] rounded-[50%]"></p>
                  <span className="font-bold text-[#0AD603]">Available</span>
                </div>
              </td>

              <td className="sm:text-nowrap px-5 pt-5 text-[rgba(33,43,54,1)] pb-2 text-[14px] font-normal text-left">
                <p>ARB—2560</p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>3</p>
              </td>

              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] text-[#00B8D9] font-bold">
                <p className="py-[4px] px-[12px] text-center rounded-full bg-[#CAFDF5]">
                  Solar project
                </p>
              </td>
            </tr>
            <tr className="border-b px-5 border-[rgba(145,158,171,0.2)] align-middle">
              <td className="bg-white text-sm">
                {/* <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%] bg-[rgba(255,94,62,0.08)]">
                  <p className="text-[rgba(255,94,62,1)] font-bold text-[14px]">
                    1
                  </p>
                </div> */}
              </td>
              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] font-normal">
                <p className="text-[rgba(32,38,211,1)] whitespace-no-wrap">
                  Sulekal solar plant
                </p>
                <p className="text-[rgba(145,158,171,1)] whitespace-no-wrap">
                  Rajasthan, India
                </p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] font-normal">
                <p className="text-gray-900 whitespace-no-wrap">14</p>
              </td>
              <td className="sm:text-nowrap px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal">
                <span>14-05-24</span>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>14</p>
              </td>

              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <div className="flex items-center gap-[12px]">
                  <p className="w-[16px] h-[16px] bg-[#0AD603] rounded-[50%]"></p>
                  <span className="font-bold text-[#0AD603]">Available</span>
                </div>
              </td>

              <td className="sm:text-nowrap px-5 pt-5 text-[rgba(33,43,54,1)] pb-2 text-[14px] font-normal text-left">
                <p>ARB—2560</p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>3</p>
              </td>

              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] text-[#00B8D9] font-bold">
                <p className="py-[4px] px-[12px] text-center rounded-full bg-[#CAFDF5]">
                  Solar project
                </p>
              </td>
            </tr>
            <tr className="border-b px-5 border-[rgba(145,158,171,0.2)] align-middle">
              <td className="bg-white text-sm">
                {/* <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%] bg-[rgba(255,94,62,0.08)]">
                  <p className="text-[rgba(255,94,62,1)] font-bold text-[14px]">
                    1
                  </p>
                </div> */}
              </td>
              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] font-normal">
                <p className="text-[rgba(32,38,211,1)] whitespace-no-wrap">
                  Sulekal solar plant
                </p>
                <p className="text-[rgba(145,158,171,1)] whitespace-no-wrap">
                  Rajasthan, India
                </p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] font-normal">
                <p className="text-gray-900 whitespace-no-wrap">14</p>
              </td>
              <td className="sm:text-nowrap px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal">
                <span>14-05-24</span>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>14</p>
              </td>

              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <div className="flex items-center gap-[12px]">
                  <p className="w-[16px] h-[16px] bg-[#FFAB00] rounded-[50%]"></p>
                  <span className="font-bold text-[#FFAB00]">No Project</span>
                </div>
              </td>

              <td className="sm:text-nowrap px-5 pt-5 text-[rgba(33,43,54,1)] pb-2 text-[14px] font-normal text-left">
                <p>ARB—2560</p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>3</p>
              </td>

              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] text-[#00B8D9] font-bold">
                <p className="py-[4px] px-[12px] text-center rounded-full bg-[#CAFDF5]">
                  Solar project
                </p>
              </td>
            </tr>
            <tr className="border-b px-5 border-[rgba(145,158,171,0.2)] align-middle">
              <td className="bg-white text-sm">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%] bg-[rgba(255,94,62,0.08)]">
                  <p className="text-[rgba(255,94,62,1)] font-bold text-[14px]">
                    1
                  </p>
                </div>
              </td>
              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] font-normal">
                <p className="text-[rgba(32,38,211,1)] whitespace-no-wrap">
                  Sulekal solar plant
                </p>
                <p className="text-[rgba(145,158,171,1)] whitespace-no-wrap">
                  Rajasthan, India
                </p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] font-normal">
                <p className="text-gray-900 whitespace-no-wrap">14</p>
              </td>
              <td className="sm:text-nowrap px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal">
                <span>14-05-24</span>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>14</p>
              </td>

              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <div className="flex items-center gap-[12px]">
                  <p className="w-[16px] h-[16px] bg-[#0AD603] rounded-[50%]"></p>
                  <span className="font-bold text-[#0AD603]">Available</span>
                </div>
              </td>

              <td className="sm:text-nowrap px-5 pt-5 text-[rgba(33,43,54,1)] pb-2 text-[14px] font-normal text-left">
                <p>ARB—2560</p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>3</p>
              </td>

              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] text-[#00B8D9] font-bold">
                <p className="py-[4px] px-[12px] text-center rounded-full bg-[#CAFDF5]">
                  Solar project
                </p>
              </td>
            </tr>
            <tr className="border-b px-5 border-[rgba(145,158,171,0.2)] align-middle">
              <td className="bg-white text-sm">
                {/* <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%] bg-[rgba(255,94,62,0.08)]">
                  <p className="text-[rgba(255,94,62,1)] font-bold text-[14px]">
                    3
                  </p>
                </div> */}
              </td>
              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] font-normal">
                <p className="text-[rgba(32,38,211,1)] whitespace-no-wrap">
                  Sulekal solar plant
                </p>
                <p className="text-[rgba(145,158,171,1)] whitespace-no-wrap">
                  Rajasthan, India
                </p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] font-normal">
                <p className="text-gray-900 whitespace-no-wrap">14</p>
              </td>
              <td className="sm:text-nowrap px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal">
                <span>14-05-24</span>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>14</p>
              </td>

              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <div className="flex items-center gap-[12px]">
                  <p className="w-[16px] h-[16px] bg-[#8E33FF] rounded-[50%]"></p>
                  <span className="font-bold text-[#8E33FF]">On Project</span>
                </div>
              </td>

              <td className="sm:text-nowrap px-5 pt-5 text-[rgba(33,43,54,1)] pb-2 text-[14px] font-normal text-left">
                <p>ARB—2560</p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>3</p>
              </td>

              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] text-[#00B8D9] font-bold">
                <p className="py-[4px] px-[12px] text-center rounded-full bg-[#CAFDF5]">
                  Solar project
                </p>
              </td>
            </tr>
            <tr className="border-b px-5 border-[rgba(145,158,171,0.2)] align-middle">
              <td className="bg-white text-sm">
                {/* <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%] bg-[rgba(255,94,62,0.08)]">
                  <p className="text-[rgba(255,94,62,1)] font-bold text-[14px]">
                    1
                  </p>
                </div> */}
              </td>
              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] font-normal">
                <p className="text-[rgba(32,38,211,1)] whitespace-no-wrap">
                  Sulekal solar plant
                </p>
                <p className="text-[rgba(145,158,171,1)] whitespace-no-wrap">
                  Rajasthan, India
                </p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] font-normal">
                <p className="text-gray-900 whitespace-no-wrap">14</p>
              </td>
              <td className="sm:text-nowrap px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal">
                <span>14-05-24</span>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>14</p>
              </td>

              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <div className="flex items-center gap-[12px]">
                  <p className="w-[16px] h-[16px] bg-[#919EAB] rounded-[50%]"></p>
                  <span className="font-bold text-[#919EAB]">Offline</span>
                </div>
              </td>

              <td className="sm:text-nowrap px-5 pt-5 text-[rgba(33,43,54,1)] pb-2 text-[14px] font-normal text-left">
                <p>ARB—2560</p>
              </td>
              <td className="px-5 pt-5 pb-2 text-[14px] text-[rgba(33,43,54,1)] font-normal text-left">
                <p>3</p>
              </td>

              <td className="px-5 sm:text-nowrap pt-5 pb-2 text-[14px] text-[#00B8D9] font-bold">
                <p className="py-[4px] px-[12px] text-center rounded-full bg-[#CAFDF5]">
                  Solar project
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SolarProject;
