"use client";
import { Fragment, useState } from "react";
import { Combobox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import SelectCity from "./SelectCity";

const people = [
  { id: 1, name: "Abcd" },
  { id: 2, name: "XYZ" },
  { id: 3, name: "Webb" },
];

const Header = () => {
  const [selected, setSelected] = useState(people);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <header className="h-[70px] px-4 sm:px-[24px] bg-white flex justify-between items-center">
      <div className="flex items-center gap-[24px]">
        <div className="flex items-center gap-[12px]">
          <div>
            <Image
              src="/svgs/logo.svg"
              className="w-[25px] h-[79px]"
              alt="Logo"
              width={10000}
              height={1000}
            />
          </div>
          <h1 className="font-semibold text-[24px]">Futr.</h1>
        </div>
        <div className="w-40 z-50 sm:w-56 lg:w-96">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative">
              <div className="relative w-full cursor-default overflow-hidden">
                <Combobox.Input
                  className="w-full border border-[#919EAB52] py-2 pl-9 pr-3 rounded-t-[8px] text-[16px] font-normal focus:outline-none leading-5 text-[#637381]"
                  displayValue={(person) => person.name}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search"
                />
                <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image
                    src="/svgs/search.svg"
                    width={1000}
                    height={1000}
                    className="h-[17px] w-[17px] text-gray-400"
                    aria-hidden="true"
                    alt="search"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options
                  id="specificDivId"
                  className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-[14px]"
                >
                  {filteredPeople.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-[#F5F5F5] text-black" : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-normal" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            <div className="border-b border-[rgba(145,158,171,0.2)] pt-2 absolute left-0 z-20 w-full"></div>
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      </div>
      <div className="flex items-center gap-[14px]">
        <div>
          <SelectCity />
        </div>
        <div className="flex h-[40px] w-[40px] rounded-[50%] bg-sky justify-center items-center">
          <Image
            src="/svgs/notifications.svg"
            className="w-[25px] h-[25px] cursor-pointer"
            alt="Logo"
            width={10000}
            height={1000}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
