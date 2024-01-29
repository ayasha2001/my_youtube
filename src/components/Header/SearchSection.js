import React from "react";
import SearchIc from "../../assets/icons/SearchIc";

const SearchSection = () => {
  return (
    <div className="my-2">
      <form className="flex items-center">
        <input
          className="w-[570px] h-7 border border-gray-200 rounded-l-full px-2"
          placeholder="search"
        />
        <button className="  border border-gray-200 px-4 w-16 h-7 rounded-r-full bg-gray-100" >
          <SearchIc />
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
