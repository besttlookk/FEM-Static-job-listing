import React from "react";

const Tablet = ({
  label,
  setFilterArr,
  filterArr,
}: {
  label: string;
  setFilterArr: (arr: string[]) => void;
  filterArr: string[];
}) => {
  const handleClick = () => {
    if (filterArr.includes(label)) return;
    else setFilterArr([...filterArr, label]);
  };
  return (
    <div
      className="text-primary bg-cyan-gray-light-bg text-xs rounded-md cursor-pointer py-1 px-3 md:py-2 md:px-4 md:text-sm hover:text-cyan-gray-light-bg hover:bg-primary transition duration-500"
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Tablet;
