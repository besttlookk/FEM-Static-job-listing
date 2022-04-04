import Image from "next/image";
import React, { useContext } from "react";
import { removeTagAction, TagsContext } from "../contexts/tagsContext";

const FilterItem = ({ item }: { item: string }) => {
  const { dispatch } = useContext(TagsContext);
  return (
    <div className="flex items-center overflow-hidden rounded-md bg-cyan-gray-light-filter">
      <span className="px-2 text-xs text-primary md:text-sm">{item}</span>
      <button
        className="flex items-center justify-center p-2 transition cursor-pointer bg-primary w-7 h-7 md:h-8 mdLw-8 hover:bg-cyan-gray-dark"
        onClick={() => dispatch(removeTagAction(item))}
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
