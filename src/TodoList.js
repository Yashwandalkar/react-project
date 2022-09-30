import React, { useState } from 'react';

const TodoList = () => {
    const [activity, setActivity]= useState("");
    const [listData, setlistData]= useState([]);
    
    
    const addActivity=()=>{
            setlistData([...listData,activity])
            console.log(listData)
            setActivity('')
           
    }
    const removeActivity=(i)=>{
        const updatedListData = listData.filter((ele, id)=>{
            return i!=id;
        })
        setlistData(updatedListData);

    }
    const removeAll = () => {
        setlistData([])
    }
    
    return(
        <>
        <div className='container'>
            <div className='header'>TODO LIST</div>
            <input type="text" placeholder='Add your Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
            <button onClick={addActivity}>Add</button>
            <p className='List-heading'> Here is your List</p>
            {listData !=[] && listData.map((data, i)=>{
                return(
                    <>
                    <p key={i}>
                    <div className='Listdata'>{data}</div>
                    <div className='btn-position'><button onClick={()=>removeActivity(i)}>Delete</button></div>
                    
                    </p>
                    </>
                )
            })}
            {listData.length>=1 &&  <button className='removeall'onClick={removeAll}>Delete All</button>}
           
        </div>
        </>

    )
}
export default TodoList;