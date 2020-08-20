import React, { useState, useCallback } from 'react';
import './App.css';
import List from './list'
import Inputbox from './Inputbox'

export interface itemType{
  name :string;
  isDone : boolean;
  ID :number;

}

function App() {
  const [lastID,setLastID]=useState(1)
  const [items,setItems]=useState<itemType[]>([])
  const setItemsCallBack = useCallback((x:string)=>{
    setItems([...items,{name:x , isDone:false ,ID:lastID}])
    setLastID((prevID)=>(prevID+1))
  },[items])
  const toggleDone =useCallback((ID:number)=>{
    setItems(items.map((x)=>x.ID ===ID ? {...x,isDone:!(x.isDone)} : x))
  },[items])
  return (
    <div>
    <List tasks ={items} toggleDone={toggleDone}/>
    <Inputbox addTask={setItemsCallBack}/>
    </div>
  )
}

export default App;
