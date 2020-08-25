import React, { ReactElement, useContext } from "react";
import StoreContext from "./store";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

const ListDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  border: 1px solid black;
  overflow-y: overlay;
`;
const Row = styled.li`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: 0;
  }
`;
const UL = styled.ul`
  padding-inline-start: 0px;
  width: 100%;
  margin-top: 0;
`;
const RemoveButton = styled.button`
  margin-left: auto;
  margin-right: 50px;
`;
const Emptymessage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function List({ className }: { className?: string }): ReactElement {
  console.log("list rendered");
  const store = useContext(StoreContext);

  return (
    <div className={className}>
      {store.filteredItems.length === 0 ? (
        <Emptymessage>Type in Your Tasks!</Emptymessage>
      ) : (
        <UL>
          {store.filteredItems.map((x) => (
            <Row key={x.ID}>
              <input type="checkbox" onChange={() => store.toggleDone(x.ID)} checked={x.isDone} />
              {x.name}-{x.isDone === false ? "Undone" : "Done"}
              <RemoveButton onClick={() => store.deleteItem(x.ID)}>remove</RemoveButton>
            </Row>
          ))}
        </UL>
      )}
    </div>
  );
}

export default ListDiv.withComponent(observer(List));
