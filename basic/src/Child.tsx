// import { useState, type ReactNode, useRef, useContext } from "react"
// // type Child={
// //     children:ReactNode
// // }
// type LISTProps<t>={
//     items:t[]
//     getitem:(item:t)=>React.key
//     renderItem:(item:t)=>React.ReactNode
// }

// export default function Child<t>({items,getitem,renderItem}:LISTProps<t>){
//     // const inpee=useRef<HTMLInputElement>(null)
//     // const user= useRef(0)
//     // const user1=useRef<number>()
//     // return <input ref={inpee}
//     return
//     <div>
//         {items.map(item=>(
//              <div key={getitem{item}}>{renderItem(item)}</div>
//         ))}
//     </div>
// }

// // type contextType={
// //     users:User[]
// //     address:({name,age}:{name:string,age:number})=>void

// // export const Context = useContext<contextType|null>(null)
// // const [users,setUsers]=useState<User[]>([])

type LISTProps<t>={
    items:t[]
    getitem:(item:t)=>React.key
    renderItem:(item:t)=>React.ReactNode
}

export default function Child<t>({items,getitem,renderItem}:LISTProps<t>){
    return(
        <div>
            {items.map(item=>(
                <div key={getitem(item)}>renderItem(item)</div>
            ))}
        </div>
    )
}