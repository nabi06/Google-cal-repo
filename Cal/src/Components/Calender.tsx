import { useState } from "react"
import '../style.css'
import Event from "../Event"

type TASK={
  id:number
  task:{
    tasks:string
    color:"red"|"green"|"blue"
  }
  day:number
  
}
export default function Calender(){
  const date=new Date()
  const Mnth=date.getMonth()
  const [mnth,setMnth]=useState(date.getMonth())
  const [year,setYear]=useState(date.getFullYear())
  const[event,setEvent]=useState<TASK[]>([])
  const today=date.getDate()
  const arr = [ "Jan", "Feb","Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep","Oct",
        "Nov","Dec", ];
  
  function Prev(){
    if(mnth===0){
      setMnth(11)
      setYear(year-1)
    }else{
      setMnth(mnth-1)
    }
  }
  function Next(){
    if(mnth===11){
      setMnth(0)
      setYear(year+1)
    }else{
      setMnth(mnth+1)
    }
  }

  function getDaysInMonth(mnth:number,year:number){
    return new Date(year,mnth+1,0).getDate()
  }
  function firstDayOfMonth(mnth:number,year:number){
    return new Date(year,mnth,1).getDay()
  }
  function rendercalenderdays(){
    let Calender=[]
          // const presentmnth=today.getMonth()
          // const presentyear=today.getFullYear()
    const daysInMonth=getDaysInMonth(mnth,year)
    const firstDay=firstDayOfMonth(mnth,year)
    for(let i=0;i<firstDay;i++){
      Calender.push(null)
    }
    for (let i=1;i<daysInMonth;i++){
      Calender.push({day:i,id:i})
    }
          
          
     return Calender
    }
    const calenderdays= rendercalenderdays()
  function Delete(id:number){
    setEvent(currentEvents => currentEvents.filter(evt => evt.id !== id));
  }
    
  return <>
    <div className="calender">
      <div className="calender-top">
        <button className="But Prev" onClick={Prev}>Prev</button>
        <button className="But Next" onClick={Next}>Next</button>
        <h2 className="Mnth">{arr[mnth]}</h2>
      </div>
      <div className="Main-grid">
      <div className="calender-grid">
      {calenderdays.map((day,index)=>{
        if(day==null){
          return <div className='calender-day'></div>
        }else{
          return  <div className={today===day.day &&mnth===Mnth?'calender-days':'calender-day'}>
            <div className="calen-day">{day.day}
          <Event event={event} setEvent={setEvent} day={day}/>
          </div>
          <div className="calender-list">
          <ul className="calender-ul">{event.map(event=>{
            if(event.day==day.day){
              return <div className="calen-events"><li className={`${event.task.color}`} title={`${event.task.color}`}>{event.task.tasks}
              </li>
              <button onClick={()=>Delete(event.id)} className="btn-event">X</button>
              </div>
            }
            
          })}
          </ul>
          </div>
          </div>
         
        }})

      }
      
      
      </div>

      </div>
    </div>
  </>
}


// type claen={
//   day:date
//   name:string[]
//   color:string
// }