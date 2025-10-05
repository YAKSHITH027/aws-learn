"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import FiltersBar from "./FiltersBar";
import FiltersFull from "./FiltersFull";
import { cleanParams } from "@/lib/utils";
import { setFilters, toggleFiltersFullOpen } from "@/state";
import Map from "./Map";
import Listings from "./Listings";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  useEffect(() => {
    const initialFilters = Array.from(searchParams.entries()).reduce(
      (acc: any, [key, value]) => {
        if (key === "priceRange" || key === "squareFeet") {
          acc[key] = value.split(",").map((v) => (v === "" ? null : Number(v)));
        } else if (key === "coordinates") {
          acc[key] = value.split(",").map(Number);
        } else {
          acc[key] = value === "any" ? null : value;
        }

        return acc;
      },
      {}
    );

    const cleanedFilters = cleanParams(initialFilters);
    dispatch(setFilters(cleanedFilters));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="w-full mx-auto px-5 flex flex-col"
      style={{
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <div className="overflow-y-auto mb-2">
        <FiltersBar />
      </div>
      <div className="flex justify-between flex-1 overflow-hidden gap-3 mb-5">
        <div
          className={`h-full overflow-auto transition-all duration-300 ease-in-out ${
            isFiltersFullOpen
              ? "w-3/12 opacity-100 visible"
              : "w-0 opacity-0 invisible"
          }`}
        >
          {" "}
          <FiltersBar />
          <div className="flex justify-between flex-1 overflow-hidden gap-3 mb-5 relative">
            {/* Desktop Sidebar */}
            <div
              className={`hidden md:block h-full overflow-auto transition-all duration-300 ease-in-out ${
                isFiltersFullOpen
                  ? "w-3/12 opacity-100 visible"
                  : "w-0 opacity-0 invisible"
              }`}
            >
              <FiltersFull />
            </div>
            {/* Mobile Drawer */}
            {isFiltersFullOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex md:hidden">
                <div className="bg-white z-[1000] w-80 h-full shadow-lg overflow-auto transition-all duration-300 ease-in-out">
                  <FiltersFull />
                </div>
                {/* Click outside to close (optional) */}
                <div
                  className="flex-1"
                  onClick={() => {
                    // dispatch action to close drawer
                    dispatch(toggleFiltersFullOpen());
                  }}
                />
              </div>
            )}
            <div className="flex flex-col md:flex-row w-full ">
              <Map />
              <div className="basis-4/12 overflow-y-auto">
                <Listings />
              </div>
            </div>
          </div>
          <FiltersFull />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-3 ">
          <Map />

          <div className="basis-4/12 overflow-y-auto">
            <Listings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
