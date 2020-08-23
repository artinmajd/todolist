import React, { ReactElement, useContext } from "react";
import StoreContext from "./store";
import { observer } from "mobx-react-lite";

function List(): ReactElement {
  console.log("list rendered");
  const store = useContext(StoreContext);
  return (
    <div>
      <ul>
        {store.filteredItems.map((x) => (
          <div key={x.ID}>
            <li>
              <input type="checkbox" onChange={() => store.toggleDone(x.ID)} checked={x.isDone} />
              {x.name}-{x.isDone === false ? "Undone" : "Done"}
              <button onClick={() => store.deleteItem(x.ID)}>remove</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default observer(List);
