import { useState } from 'react'
import {StatusChecked} from './Event1'



type TASK={
    id:number
    task:{
      tasks:string
      color:"red"|"green"|"blue"
    }
    day:number
    
  }
type Eventprops={
    event:TASK[]
    setEvent:React.Dispatch<React.SetStateAction<TASK[]>>
    day:{
        day:number
        id:number
    }
}

export default function Event({event,setEvent,day}:Eventprops){
    
    const [popUp,setPopUp] =useState(Boolean)
    const [tasks,setTasks] =useState("") 
    const[checked,setChecked] =useState(Boolean)
    const [startTime,setStartTime] =useState<any>()
    const [endTime,setEndTime] = useState<any>()
    const [color,setColor] = useState<"red"|"blue"|"green">()

    function PopUp(){
        setPopUp(true)
        console.log("pop")
    }

    function Close(){
        setPopUp(false)
    }
    function Starttime(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target!== null) {
          setStartTime(event.target.value);
        }
        console.log(startTime);
      

    }
    function Endtime(event: React.ChangeEvent<HTMLInputElement>){
        if(event.target != null){
            setEndTime(event.target.value)
    }
    console.log("end",endTime)
    }
    function handlechange(event: React.ChangeEvent<HTMLInputElement>){
        if(event.target.checked){
            setChecked(true)
            StatusChecked()
        }else{
            setChecked(false)
        }
    }
    function EVENT(event: React.ChangeEvent<HTMLInputElement>){
        setTasks(event.target.value)
    }
    function AddEvent(){
        setEvent(event=>[...event,{
            id:event.length+1,
            task:{tasks,color:color ?? "red"},  //Nullish coalescing
            day:day.day
            
        }])
        setTasks("")
        console.log(event)
    }
    return <>
    <button id="Button" onClick={PopUp}>+</button>
     {popUp && <div id="myPop" className={popUp?"pop": "popup"}>
    <div className="popup-content">
        <div className="popup-title">
        <input type='text' placeholder='Event' value={tasks} onChange={EVENT} />
        <button className="add" onClick={AddEvent}>+</button>
     <button className="close" onClick={Close}>X</button>
        </div>
     <div className='pop-content'>
        <div className='pop-time'>
        <input type='checkbox' placeholder='allday' onChange={handlechange}/>
        <input type='time' id='start' value={startTime} onChange={Starttime}/>
        <input type='time' id='end' value={endTime} onChange={Endtime}/>
        
        </div>
        <div className='pop-color'>
        <select onChange={(event)=>{
           setColor(event.target.value as "red"|"blue"|"green")
        }}>
            <option value={"red"}>red</option>
            <option value={"blue"}>blue</option>
            <option value={"green"}>green</option>
        </select>
        </div>
    
    </div>
 </div>
 </div> }
    </>
   
}