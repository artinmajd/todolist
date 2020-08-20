import React,{ReactElement} from 'react'

function List({tasks}:{tasks:string[]}):ReactElement{
    return (
        <div>
            <ul>
                {tasks.map((x)=><li>{x}</li>)}
            </ul>
        </div>
    )

}

export default List