import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <SearchContext.Provider value={{ searchTitle, setSearchTitle }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);