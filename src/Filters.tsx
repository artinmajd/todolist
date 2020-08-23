import React, { ReactElement, useCallback } from "react";
import { FilterType } from "./App";

interface Props {
  handleFilterCallback: (arg0: FilterType) => void;
  selectedFilter: FilterType;
}

export default function Filters({ handleFilterCallback, selectedFilter }: Props): ReactElement {
  const handleAllcallback = useCallback(() => handleFilterCallback("All"), [handleFilterCallback]);
  const handleDonecallback = useCallback(() => handleFilterCallback("Done"), [handleFilterCallback]);
  const handleUndonecallback = useCallback(() => handleFilterCallback("Undone"), [handleFilterCallback]);

  return (
    <div>
      <button onClick={handleAllcallback} disabled={selectedFilter === "All"}>
        All
      </button>
      <button onClick={handleDonecallback} disabled={selectedFilter === "Done"}>
        Done
      </button>
      <button onClick={handleUndonecallback} disabled={selectedFilter === "Undone"}>
        Undone
      </button>
    </div>
  );
}
