import React, { ReactElement, useCallback, useState } from "react";

function Inputbox({ addTask }: { addTask: (arg0: string) => void }): ReactElement {
  const [textValue, setTextValue] = useState("");
  const handleButtonAddClick = useCallback(() => {
    if (textValue !== "") {
      addTask(textValue);
      setTextValue("");
    }
  }, [textValue, addTask]);
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
