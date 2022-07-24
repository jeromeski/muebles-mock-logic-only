import React, { useState } from "react";
import _ from "lodash";

import { useGetProducts } from "api/product/get-all-products";
import useThrottledMatch from "hooks/use-throttled-match";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
  ComboboxList
} from "../combobox";
import "./search-bar-style.css";

const SearchBar = () => {
  const { data } = useGetProducts();
  const [term, setTerm] = useState("");
  const matchedValues = useThrottledMatch(term, data);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <Combobox>
        <ComboboxInput handleChange={handleChange} term={term} />
        {matchedValues && (
          <ComboboxPopover>
            <ComboboxList>
              {matchedValues?.slice(0, 10).map((item) => (
                <ComboboxOption key={item.id} {...item} clearSearch={setTerm} />
              ))}
              {_.isEmpty(matchedValues) && <span>No Match!</span>}
            </ComboboxList>
          </ComboboxPopover>
        )}
      </Combobox>
    </div>
  );
};

export default SearchBar;
