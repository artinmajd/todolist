import React, { ReactElement, useCallback, useContext } from "react";
import StoreContext from "./store";
import { observer } from "mobx-react-lite";

function Filters(): ReactElement {
  const store = useContext(StoreContext);
  const handleAllcallback = useCallback(() => store.changeFilter("All"), [store]);
  const handleDonecallback = useCallback(() => store.changeFilter("Done"), [store]);
  const handleUndonecallback = useCallback(() => store.changeFilter("Undone"), [store]);

  return (
    <div>
      <button onClick={handleAllcallback} disabled={store.filter === "All"}>
        All
      </button>
      <button onClick={handleDonecallback} disabled={store.filter === "Done"}>
        Done
      </button>
      <button onClick={handleUndonecallback} disabled={store.filter === "Undone"}>
        Undone
      </button>
    </div>
  );
}

export default observer(Filters);
