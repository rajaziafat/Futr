import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function Select({ selected, setSelected, people }) {
  return (
    <div className="hidden bg-white sm:block sm:w-48">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full border border-[#919EAB52] cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block text-[14px] text-[#637381] truncate">
              {selected.name}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {people.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? "bg-[#F5F5F5] text-black" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <input
                        type="radio"
                        className="hidden"
                        value={person.id}
                        checked={selected}
                        onChange={() => setSelected(person)}
                      />
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          className="w-4 h-4 text-royalBlue cursor-pointer focus:ring-blue-400"
                          checked={selected}
                          onChange={() => setSelected(person)}
                        />
                        <span className="block truncate ml-2">
                          {person.name}
                        </span>
                      </label>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
