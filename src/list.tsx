import React,{ReactElement} from 'react'
import { itemType } from './App'


function List({tasks,toggleDone}:{tasks:itemType[],toggleDone:(ID:number)=>void}):ReactElement{
    return (
        <div>
            <ul>
                {tasks.map((x)=>
            <div>
                <li>
                <input type="checkbox" onChange={()=>{toggleDone(x.ID)}} checked={x.isDone}/>
                {x.name}-{x.isDone==false?'Undone':'Done'}
                </li>
            </div>
            )}
            </ul>
        </div>
    )

}

export default List