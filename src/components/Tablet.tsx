import React, { useContext } from "react";
import { addTagAction, TagsContext } from "../contexts/tagsContext";

const Tablet = ({ label }: { label: string }) => {
  const { dispatch } = useContext(TagsContext);
  return (
    <div
      className="px-3 py-1 text-xs transition duration-500 rounded-md cursor-pointer text-primary bg-cyan-gray-light-bg md:py-2 md:px-4 md:text-sm hover:text-cyan-gray-light-bg hover:bg-primary"
      onClick={() => dispatch(addTagAction(label))}
    >
      {label}
    </div>
  );
};

export default Tablet;
