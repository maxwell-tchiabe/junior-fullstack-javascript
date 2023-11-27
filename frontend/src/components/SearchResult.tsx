import "./SearchResult.css";
import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

interface SearchBarProps {
    results: any[];
  }
  
export const SearchBar: React.FC<SearchBarProps> = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result:any, id: any) => {
        return <div key={id}>{result.cityname}</div>;
      })}
    </div>
  );
};