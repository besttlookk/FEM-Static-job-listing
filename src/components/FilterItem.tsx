import Image from "next/image";
import React from "react";

const FilterItem = ({
  item,
  setFilterArr,
  filterArr,
}: {
  item: string;
  setFilterArr: (arr: string[]) => void;
  filterArr: string[];
}) => {
  return (
    <div className="flex items-center bg-cyan-gray-light-filter rounded-md overflow-hidden">
      <span className="text-primary text-xs md:text-sm px-2">{item}</span>
      <button
        className="bg-primary p-2 w-7 h-7 md:h-8 mdLw-8 flex items-center justify-center cursor-pointer hover:bg-cyan-gray-dark transition"
        onClick={() => setFilterArr(filterArr.filter((tag) => tag !== item))}
      >
        <Image
          src="/images/icon-remove.svg"
          alt="remove-icon"
          width="100%"
          height="100%"
        />
      </button>
    </div>
  );
};

export default FilterItem;
