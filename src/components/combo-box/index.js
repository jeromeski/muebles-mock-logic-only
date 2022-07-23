import React, { useState, useEffect } from "react";
import { useThrottle } from "react-use";
import { matchSorter } from "match-sorter";
import { useGetProducts } from "api/product/get-all-products";

const ComboboxInput = ({ handleChange }) => {
  return <input type="text" onChange={handleChange} />;
};

const ComboboxPopover = ({ matchedValues }) => {
  return (
    <div>
      {matchedValues &&
        matchedValues?.map((val) => <pre key={val.id}>{val.title}</pre>)}
    </div>
  );
};

const useGetMatch = (term, data) => {
  const throttledTerm = useThrottle(term, 500);
  return React.useMemo(
    () =>
      term.trim() === ""
        ? null
        : matchSorter(data, term, {
            keys: [(item) => `${item.title}`]
          }),
    [throttledTerm, data, term]
  );
};

const Combobox = () => {
  const { data } = useGetProducts();
  const [term, setTerm] = useState("");
  const matchedValues = useGetMatch(term, data);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  // console.log(data)

  return (
    <div>
      <ComboboxInput handleChange={handleChange} />
      {matchedValues && <ComboboxPopover matchedValues={matchedValues} />}
    </div>
  );
};

export default Combobox;
