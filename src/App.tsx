import React, { useState, useCallback } from "react";
import "./App.css";
import List from "./list";
import Inputbox from "./Inputbox";
import Filters from "./Filters";

export interface itemType {
  name: string;
  isDone: boolean;
  ID: number;
}
export type FilterType = "All" | "Done" | "Undone";

function App() {
  const [lastID, setLastID] = useState(1);
  const [items, setItems] = useState<itemType[]>([]);
  const [filter, setFilter] = useState<FilterType>("All");
  const setItemsCallBack = useCallback(
    (x: string) => {
      setItems([...items, { name: x, isDone: false, ID: lastID }]);
      setLastID((prevID) => prevID + 1);
    },
    [items, lastID]
  );
  const toggleDone = useCallback((ID: number) => {
    setItems((prevItems) => prevItems.map((x) => (x.ID === ID ? { ...x, isDone: !x.isDone } : x)));
  }, []);
  const deleteItem = useCallback((ID: number) => {
    setItems((prevItems) => prevItems.filter((x) => x.ID !== ID));
  }, []);
  const handleFilterCallback = useCallback((s: FilterType) => setFilter(s), []);
  return (
    <div>
      <Filters handleFilterCallback={handleFilterCallback} selectedFilter={filter} />
      <List
        tasks={items.filter((x) => {
          return filter === "All"
            ? true
            : filter === "Done" && x.isDone === true
            ? true
            : filter === "Undone" && x.isDone === false;
        })}
        toggleDone={toggleDone}
        deleteItem={deleteItem}
      />
      <Inputbox addTask={setItemsCallBack} />
    </div>
  );
}

export default App;
