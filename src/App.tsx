import React, { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import "./App.css";
import List from "./list";
import Inputbox from "./Inputbox";
import Filters from "./Filters";
import styled from "@emotion/styled";

export interface itemType {
  name: string;
  isDone: boolean;
  ID: number;
}
export type FilterType = "All" | "Done" | "Undone";

const Maindiv = styled.div`
  width: 50%;
`;

const ListFiltersDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
`;

const StyleApp = styled.div`
  display: flex;
  justify-content: center;
`;
function App({ className }: { className?: string }): ReactElement {
  return (
    <div className={className}>
      <Maindiv>
        <ListFiltersDiv>
          <List />
          <Filters />
        </ListFiltersDiv>
        <Inputbox />
      </Maindiv>
    </div>
  );
}

export default StyleApp.withComponent(observer(App));
