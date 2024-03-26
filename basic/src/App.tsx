import Child from "./Child"

export default function App(){
  return (<Child
    items={[
      {id:1,name:"HE",age:20},
      {id:2,name:"hee",age:30}
    ]}
    getitem ={item=>item.id}
    renderItem = {item=><div>{item.name}</div>}
  />
  )
}