import React, { ReactElement, useCallback, useState, useContext } from "react";
import StoreContext from "./store";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 50%;
`;
const AddButton = styled.input`
  margin-left: auto;
  padding: 0 20px;
  line-height: 5px;
`;
const Maindiv = styled.div`
  display: flex;
  margin-right: 63px;
  margin-top: 5px;
`;
function Inputbox({ className }: { className?: string }): ReactElement {
  const store = useContext(StoreContext);
  const [textValue, setTextValue] = useState("");
  const handleButtonAddClick = useCallback(
    (event: React.FormEvent) => {
      if (textValue !== "") {
        store.addTask(textValue);
        setTextValue("");
      }
      event.preventDefault();
    },
    [store, textValue]
  );
  const handleInputChange = useCallback((event) => {
    setTextValue(event.target.value);
  }, []);

  return (
    <form className={className} onSubmit={handleButtonAddClick}>
      <Input placeholder="Type your task Here" onChange={handleInputChange} value={textValue}></Input>
      <AddButton type="submit" value="ADD" />
    </form>
  );
}
export default Maindiv.withComponent(Inputbox);
