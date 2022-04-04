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

const ListItem = ({
  data,
  setFilterArr,
  filterArr,
}: {
  data: DataType;
  setFilterArr: (arr: string[]) => void;
  filterArr: string[];
}) => {
  return (
    <div
      className={`flex  relative justify-between px-5 py-2  bg-white mb-9 rounded-md shadow-xl flex-col md:flex-row md:items-center`}
    >
      <div className=" md:hidden absolute top-0 left-4 -translate-y-1/2">
        <Image
          src={data.logo}
          alt="logo"
          width="36px"
          height="36px"
          // className=""
        />
      </div>

      {/* left side */}
      <div className="flex items-center gap-5  border-b py-3 md:border-none md:gap-2">
        {/* Image */}
        <div className="hidden md:block">
          <Image
            src={data.logo}
            alt="logo"
            width="68px"
            height="68px"
            // className=""
          />
        </div>

        <div className="">
          <div className="flex gap-3 items-center mb-1 ">
            <span className="text-primary text-sm md:text-lg font-bold ">
              {data.company}
            </span>
            {data.new && (
              <span className="inline-block text-white uppercase py-1 px-2 rounded-full md:text-xs bg-primary text-tiny">
                New
              </span>
            )}
            {data.featured && (
              <span className="inline-block text-white uppercase py-1 px-2 rounded-full md:text-xs bg-cyan-gray-dark text-tiny">
                Featured
              </span>
            )}
          </div>
          <p className="font-bold text-cyan-gray-dark hover:text-primary transition cursor-pointer md:text-xl md:tracking-wide">
            {data.position}
          </p>
          <ul className="flex items-center gap-6 text-xs md:text-sm text-cyan-gray mt-2 ">
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
            <Tablet
              key={language}
              label={language}
              setFilterArr={setFilterArr}
              filterArr={filterArr}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ListItem;
