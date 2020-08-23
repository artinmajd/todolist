import React from "react";
import { observer } from "mobx-react-lite";
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
  return (
    <div>
      <Filters />
      <List />
      <Inputbox />
    </div>
  );
}

export default observer(App);
