"use client"
const Table = ({
  columns,
  selectedProject,
  onProjectChange,
  openProject,
  setOpenProject,
  tableData,
}) => {
  return (
    <div className="overflow-x-auto pt-3 px-3">
      <div className="inline-block min-w-full rounded-lg overflow-hidden">
        <table className="relative z-[1] min-w-full leading-normal">
          <thead>
            <tr className="border-b-2 border-borderDark">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-5 pt-2 pb-4 text-left text-[14px] font-semibold sm:font-bold text-slateGray uppercase tracking-wider"
                >
                  {column.title}
                  {column.dropdown && (
                    <div className="relative">
                      <div onClick={() => setOpenProject(!openProject)}>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 group"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                          >
                            <path
                              d="M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z"
                              fill="#637381"
                              className="group-hover:fill-royalBlue"
                            />
                            <path
                              d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z"
                              fill="#637381"
                              className="group-hover:fill-royalBlue"
                            />
                            <path
                              d="M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11Z"
                              fill="#637381"
                              className="group-hover:fill-royalBlue"
                            />
                          </svg>
                          <span className="group-hover:text-royalBlue">
                            {column.lastTitle}
                          </span>
                        </button>
                      </div>
                      {openProject && (
                        <div className="w-[300px] absolute top-[130%] right-0 mt-1 bg-white rounded-md shadow-lg">
                          {column.options.map((option, index) => (
                            <label
                              key={index}
                              className="block px-4 py-2 font-normal text-[14px] text-slateGray cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="project"
                                value={option.value}
                                className="mr-2"
                                checked={selectedProject === option.value}
                                onChange={onProjectChange}
                              />{" "}
                              {option.label}
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="z-10">
            {tableData.map((data, index) => (
              <tr
                className="border-b px-5 border-borderDark align-middle"
                key={index}
              >
                {data.number ? (
                  <td className="bg-white text-sm">
                    <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%] bg-shadeCoral">
                      <p className="text-sunsetCoral font-bold text-[14px]">
                        {data.number}
                      </p>
                    </div>
                  </td>
                ) : (
                  <td></td>
                )}
                <td className="px-5 text-nowrap pt-5 pb-2 text-[14px] font-normal">
                  <p className="text-royalBlue whitespace-no-wrap">
                    {data.plantName}
                  </p>
                  <p className="text-slateGray whitespace-no-wrap">
                    {data.location}
                  </p>
                </td>
                <td className="px-5 pt-5 pb-2 text-[14px] font-normal">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {data.value1}
                  </p>
                </td>
                <td className="text-nowrap px-5 pt-5 pb-2 text-[14px] text-slateNavy font-normal">
                  <span>{data.date}</span>
                </td>
                <td className="px-5 pt-5 pb-2 text-[14px] text-slateNavy font-normal text-left">
                  <p>{data.value2}</p>
                </td>
                <td className="px-5 pt-5 text-nowrap pb-2 text-[14px] text-slateNavy font-normal text-left">
                  <div className="flex items-center gap-[12px]">
                    <p
                      className={`w-[16px] h-[16px] bg-${data.status.class} rounded-[50%]`}
                    ></p>
                    <span className={`font-bold text-${data.status.class}`}>
                      {data.status.statusValue}
                    </span>
                  </div>
                </td>
                <td className="text-nowrap px-5 pt-5 text-slateNavy pb-2 text-[14px] font-normal text-left">
                  <p>{data.code}</p>
                </td>
                <td className="px-5 pt-5 pb-2 text-[14px] text-slateNavy font-normal text-left">
                  <p>{data.value3}</p>
                </td>
                <td className="px-5 text-nowrap pt-5 pb-2 text-[14px] text-cyan font-bold">
                  <p className="py-[4px] px-[12px] text-center rounded-full bg-turquoise">
                    {data.project}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
