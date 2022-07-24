import { matchSorter } from "match-sorter";

import React from "react";
import { useThrottle } from "react-use";

const useThrottledMatch = (term, data) => {
  const throttledTerm = useThrottle(term, 200);
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

export default useThrottledMatch;
