import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfun, deletefun, deletefun1, editfun, editfun1, transfertocom, transfertoinc } from './Action'

export default function Component1() {
    const [flag , setFlag]=useState(false)
    const[checkarr , setCheckarr]=useState('')
    const[editind , setEditind]=useState('')
    const[currenttask , setCurrenttask]=useState('')
    const mystore=useSelector((state)=>state)
    const dispatch=useDispatch()

    const checkbox1fun=(event , d , i)=>{
        event.preventDefault()
        dispatch(transfertocom(d , i))
        setEditind('')
        setFlag(false)
        setCurrenttask('')
        setCheckarr('')
    }
    const checkbox1fun1=(event , d , i)=>{
        event.preventDefault()
        dispatch(transfertoinc(d , i))
        setEditind('')
        setFlag(false)
        setCurrenttask('')
        setCheckarr('')
    }
    const editfunction=(d , i)=>{
        setCurrenttask(d)
        setFlag(true)
        setEditind(i)
        setCheckarr(0)
    }
    const editfunction1=(d , i)=>{
        setCurrenttask(d)
        setFlag(true)
        setEditind(i)
        setCheckarr(1)
    }
    const addfunction=(event)=>{
     
       if(event.target.innerText==="ADD"){
        if(currenttask!==""){
            dispatch(addfun(currenttask))

            setCurrenttask('')
        }
       }
       if(event.target.innerText==="UPDATE"){
        if(checkarr===0){
            if(currenttask!==""){
                dispatch(editfun(editind , currenttask))
                setEditind('')
                setFlag(false)
                setCurrenttask('')
                setCheckarr('')
         
            }

        }
        if(checkarr===1){
            if(currenttask!==""){
                dispatch(editfun1(editind , currenttask))
                setEditind('')
                setFlag(false)
                setCurrenttask('')
                setCheckarr('')
         
            }
        }
        
       }
    }
    const deleteincomplete=(i)=>{
        dispatch(deletefun(i))
        setEditind('')
        setFlag(false)
        setCurrenttask('')
        setCheckarr('')
    }
    const deletecomplete=(i)=>{
        dispatch(deletefun1(i))
        setEditind('')
        setFlag(false)
        setCurrenttask('')
        setCheckarr('')
    }
  return (
    <div className="component1_main_div_class">
    <div className="component1_heading_div_class">TODO APP</div>
    <div className="component1_heading_div_class">
        <input type="text" value={currenttask} onChange={(e)=>{setCurrenttask(e.target.value)}}/>
        <button onClick={addfunction}>{flag?"UPDATE":"ADD"}</button>
    </div>
    <div className="component1_incomplete_task_div">
        {mystore.reducerfun.task?<p>INCOMPLETE TASK</p>:""}
        <table>
            <tbody> 
                   {mystore.reducerfun.task.map((d , i)=>{
            return(
                <tr key={i}><td><input type="checkbox" onClick={(event)=>checkbox1fun(event , d , i)}/></td><td>{d}</td><td><button onClick={()=>editfunction(d , i)}>EDIT</button></td><td><button onClick={()=>deleteincomplete(i)}>DELETE</button></td></tr>
            )
        })}
        </tbody>
        </table>
    </div>
    <div className="component1_incomplete_task_div">
    {mystore.reducerfun.task?<p>COMPLETE TASK</p>:""}
        <table className="table2">
            <tbody> 
                   {mystore.reducerfun.complete.map((d , i)=>{
            return(
                <tr key={i}><td><input type="checkbox" checked onClick={(event)=>checkbox1fun1(event , d , i)}/></td><td>{d}</td><td><button onClick={()=>editfunction1(d , i)}>EDIT</button></td><td><button onClick={()=>deletecomplete(i)}>DELETE</button></td></tr>
            )
        })}
        </tbody>
        </table>
    </div>
    </div>
  )
}
