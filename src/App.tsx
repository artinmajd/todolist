import React from 'react';
import './App.css';
import List from './list'

function App() {
  let items :string[] =['task1','task2','task3']
  return (
    
    <List tasks ={items}/>
    
  )
}

export default App;
