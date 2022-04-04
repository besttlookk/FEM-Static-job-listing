import Image from "next/image";
import React from "react";
import Tablet from "./Tablet";

interface DataType {
  id: string;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const ListItem = ({ data }: { data: DataType }) => {
  return (
    <div
      className={`flex  relative justify-between px-5 py-2  bg-white mb-9 rounded-md shadow-xl flex-col md:flex-row md:items-center`}
    >
      <div className="absolute top-0 -translate-y-1/2  md:hidden left-4">
        <Image src={data.logo} alt="logo" width="36px" height="36px" />
      </div>

      {/* left side */}
      <div className="flex items-center gap-5 py-3 border-b md:border-none md:gap-2">
        {/* Image */}
        <div className="hidden md:block">
          <Image src={data.logo} alt="logo" width="68px" height="68px" />
        </div>

        <div className="">
          <div className="flex items-center gap-3 mb-1 ">
            <span className="text-sm font-bold text-primary md:text-lg ">
              {data.company}
            </span>
            {data.new && (
              <span className="inline-block px-2 py-1 text-white uppercase rounded-full md:text-xs bg-primary text-tiny">
                New
              </span>
            )}
            {data.featured && (
              <span className="inline-block px-2 py-1 text-white uppercase rounded-full md:text-xs bg-cyan-gray-dark text-tiny">
                Featured
              </span>
            )}
          </div>
          <p className="font-bold transition cursor-pointer text-cyan-gray-dark hover:text-primary md:text-xl md:tracking-wide">
            {data.position}
          </p>
          <ul className="flex items-center gap-6 mt-2 text-xs md:text-sm text-cyan-gray ">
            <li>{data.postedAt}</li>
            <li className="list-disc">{data.contract}</li>
            <li className="list-disc">{data.location}</li>
          </ul>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-wrap gap-2 py-3">
        {[...data.languages, data.role, data.level, ...data.tools].map(
          (language) => (
            <Tablet key={language} label={language} />
          )
        )}
      </div>
    </div>
  );
};

export default ListItem;
