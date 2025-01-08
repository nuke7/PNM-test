'use client'
import { Fragment } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";

interface FilterSectionProps {
  locations: string[];
  industries: string[];
  selectedLocation: string;
  selectedIndustry: string;
  onLocationChange: (location: string) => void;
  onIndustryChange: (industry: string) => void;
}

export const FilterSection = ({
  locations,
  industries,
  selectedLocation,
  selectedIndustry,
  onLocationChange,
  onIndustryChange,
}: FilterSectionProps) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="w-64">
        <Listbox value={selectedLocation} onChange={onLocationChange}>
          <div className="relative">
            <ListboxButton className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-left">
              {selectedLocation || "Select Location"}
            </ListboxButton>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                <ListboxOption value="">
                  {({ selected }) => (
                    <div
                      className={`${
                        selected ? "bg-blue-500 text-white" : "text-gray-900"	
                      } cursor-pointer select-none relative py-2 px-3`}
                    >
                      All Locations
                    </div>
                  )}
                </ListboxOption>
                {locations.map((location) => (
                  <ListboxOption key={location} value={location}>
                    {({ selected }) => (
                      <div
                        className={`${
                          selected ? "bg-blue-500 text-white" : "text-gray-900"
                        } cursor-pointer select-none relative py-2 px-3`}
                      >
                        {location}
                      </div>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="w-64">
        <Listbox value={selectedIndustry} onChange={onIndustryChange}>
          <div className="relative">
            <ListboxButton className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-left">
              {selectedIndustry || "Select Industry"}
            </ListboxButton>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                <ListboxOption value="">
                  {({ selected }) => (
                    <div
                      className={`${
                        selected ? "bg-blue-500 text-white" : "text-gray-900"
                      } cursor-pointer select-none relative py-2 px-3`}
                    >
                      All Industries
                    </div>
                  )}
                </ListboxOption>
                {industries.map((industry, index) => (
                  <ListboxOption key={index} value={industry}>
                    {({ selected }) => (
                      <div
                        className={`${
                          selected ? "bg-blue-500 text-white" : "text-gray-900"
                        } cursor-pointer select-none relative py-2 px-3`}
                      >
                        {industry}
                      </div>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};
