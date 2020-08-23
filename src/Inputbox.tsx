import React, { ReactElement, useCallback, useState, useContext } from "react";
import StoreContext from "./store";

function Inputbox(): ReactElement {
  const store = useContext(StoreContext);
  const [textValue, setTextValue] = useState("");
  const handleButtonAddClick = useCallback(() => {
    if (textValue !== "") {
      store.addTask(textValue);
      setTextValue("");
    }
  }, [store, textValue]);
  const handleInputChange = useCallback((event) => {
    setTextValue(event.target.value);
  }, []);

  return (
    <div>
      <input placeholder="Type your task Here" onChange={handleInputChange} value={textValue}></input>
      <button onClick={handleButtonAddClick}>ADD</button>
    </div>
  );
}
export default Inputbox;
