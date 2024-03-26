// type person={
//     name:string
//     age:number
// }
// type personID=person & {id:string}
// type ppp={
//     id:string
// }

// const  a={name:"ni",age:20,id:"helo"}
// console.log(a)
// type personId=person | ppp
// const b ={
//     name:"ni",
//     age:20,
// }
// console.log(b)
// function printfunc(a:number,b:number,cb:(sum:number)=>number){
//     cb(a+b)
// }
// printfunc(1,2, (sum)=>{
//    return(sum)
// })
// type printfunc=()=>void
// function f(){
//     return 
// }
// type printfunc=(name:string)=>number // stirng params but return type number 
// function f(name:"hello"){
//     return 2 
// }

// type printfunc=(name:string )=>number
// function f(name:string){
//     return 2
// }
// type Person={
//     name:string
//     age:number
//     readonly id:number 
// }
// const c:Person={name:"name", age:20,id:2}

// type person={
//     name:string
//     age:number
// }

// function printfunc( key :keyof person, pp:person){
//     return pp[key]
// }
// printfunc("age",{name:"name", age:20})

// const people={name:"nn",age:20}
// const per:(typeof people)[]=[]
// per.push(people)
// per.push({name:"hi",age:20})
// per.push(2)   // error 
// type person={
//     name:string
//     skilled:"skilled"|"Not"|"experienced"    // here 1st experinceed is not added but we add here so we no need to add at others
// }
// const people :person={name:"nn",skilled:"experienced"}
// printfunc(people.skilled)

// function printfunc(skilled:person["skilled"]){
//     console.log(skilled)
// }

// type person={
//     name:string
//     skilled:"skilled"|"Not"   // 
// }
// const people :person={name:"nn",skilled:"experienced"}
// printfunc(people.skilled)

// function printfunc(skilled:"skilled"|"Not"){
//     console.log(skilled)
// }
// //we get error as experienced skilled is not present 
// // and we need to add at both skilled where ever it used 

type person={
    name:string
    skilled:"beginner"|"Master"|"intermediate"
}
type PersonSkill={
    [index:string]:person[]   // any string index must be in form person array 
}
const people:PersonSkill ={
    sadfa:[{name:"hello",skilled:"beginner"}]
}

// const a:(string|boolean)[]=["sfd","jlkj",true]
//or also 
const a=["sfd","jlkj",true]
type A=(typeof a)[number]         // here the type A is stirng / boolean 

const b={
    name:"helo",
    age:20
}
type B=(typeof b)["name"]      /// can be keys present inthe dict 

// const s=["sdf","abc","edf"] as const
// s.push("adsf")     // gets an error 
// const e=s[0]  // here e is "sdf " and its fixed 

 
// type C={
//     skillelevel:"beginner"| "Intemediate" | "Master"
// }  // to map this we need  use  index keyword 

// skill_level.map(skillelevel=>{
//     console.log(skillelevel)
// })


// let skill_level=["beginner", "Intemediate", "Master"] as const
// type C={
//     skillelevel:(typeof skill_level)[number]
// }  // to map this we need  use  index keyword 

// skill_level.map(skillelevel=>{
//     console.log(skillelevel)
// })

// type Tuple=[string , number ]
// const h:Tuple=["sdf",20]


// const input= document.querySelector<HTMLInputElement>(".input")

// console.log(input?.value)
// // to overcome the error 

// function printfun(array:number[]){
//     return array[1]
// }

// const k=[1,2,3]
// const s=["a",'b','c']
// const printt=printfun(k)
// const printtt=printfunc(s) // this gets error beacuse the aray is of number so 
// so to change this in functions we use generics 
// func can have any number of generics and its declare as 

function printfun<ArrayType>(array:ArrayType[]){
    return array[1]
}

const k=[1,2,3]
const s=["a",'b','c']
const printt=printfun(k)
const printtt=printfun(s)
type Apires<TData>={
    data:TData
    isError:boolean
 } // the TData is where how the data can be any form 
     //and the form is decalre in the below 
//  const api:Apires<{name:string,age:number}>={
//     data:{
//         name:"ni",
//         age:20
//     },
//     isError:false
//  } // here the Apires is having the genrric with no defacult ones 

// or also
type userres= Apires<Array<number>>
const api: userres= {
    data:[1,2,3],
    isError:false
 } 


 // code to convert any array to object 
function ArrObj<T>(array:[string,T][]){
    const obj:{
        [index:string]:T  
    }={}
    array.forEach(([key,value])=>{
        obj[key]=value
    })
}
// used generic as <T> as it has different types 
// declare the 1st object obj as in js the give type to it 
// also use for each to loop in the array and give the values to it  


const arr:[string,number|boolean][]=[
    ["kk",1],
    ["bb",6],
    ["ss",10]
 ]
const obj=ArrObj(arr)

async function wait(duration:number){
    return await fetch("Str")
}

wait(1000).then((value)=>{
    console.log(value.json())
})

type PPerson={
    name:string
    age:number
    address:{/*sss*/}
}

type PPerson1= Omit<PPerson,"address"> // in PPerson1 it does not have address 

type PPerson2= Pick<PPerson, "name" |"age"> // in 
// PPerson2 it has  name and age  
type todo={
    title?:string
    isCompleted:boolean
    address?:{
        name?:string
    }
}
type formTodo=Required<Pick<todo,"title">>& Omit<todo,"title">
const hh:formTodo={
    title:"hello",
    isCompleted:true
}

type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> &todo
// here in this we are keeping the requiredPick type we has a type T and 
// the other key extends keysof T is where the key is one type from T 
type bb=RequiredPick<todo,"title">

function func(a:string,b:number){
    return a.length>b
}

type functype=ReturnType<typeof func> // here the type of 
// functype is boolean
type functt=Parameters<typeof func> // here functt is bascially an tuple array
// which can be acessed as arary  

type Person2={
    name:string
    age:number 
}
// type PeopleGroupedByName = {
//
// [index: string]: Person[]
//
// }
type PeopleGroupedByName = Record<Person2 ["name"], Person2 [ ]>

type Todo ={
title: string 
completed: boolean
}

type FinalTodo = Readonly<Todo>

async function todosome(){
    return 2 
}

type Value= Awaited<ReturnType<typeof todosome>>

const aa=[ 1,"2",true]
aa.forEach((key=>{
    if(typeof key=="boolean"){
        console.log(key)        // here key is boolean 
    }if(typeof key=="string"){
        console.log(key)            // here key is string   
    }else{
        console.log(key)     // here   key is number 
    }
}))

type b={
    name:string 
    age?:number
    strength:"good"|"bad"|"great"
}

const ba:b={
    name:"ni",
    age:20,
    strength:"great"
}
switch(ba.strength){
    case "good":
        console.log("good")
        break;
    case "bad":
        console.log("bad")
        break;
    case "great":
        console.log("great")
        break;
    default:
       const evec:never=ba.strength // here evec is never as there are no values or types to it 

       console.log(evec) 
}

type Todos={
    name:string
}
function todo(data:unknown){    // here using any every type increases complexity of the code so we use unknown key word 
   fetch("ss").then(res=>res.json).then(data=>{
    return data as Todos
   }).then(todos=>{                 // here todo is changed to Todos 

   })

}


const aaa :any=2
const hha=aaa as string
hha.length

type Tdo={
    name:string
    duedae:string|Date
    isCompleted :boolean
}

const t={
    name:"hi",
    duedae: new Date(),
    isCompleted:true
}satisfies Tdo   // here the satisfies key words check if it is satisfying the type od it or not 
// and we get no erroe while using as duedae is string or boolean 

t.duedae.setDate
// type sucessfull={
//     status:"sucess"|"Error"
//     date?:{name:string,yes:Date}
//     error?:string
// }
// function Issucess(res:sucessfull){
//     if(res.status==="sucess"){
//         console.log(res.date.name)
//     }else{
//         console.log(res.error.length)
//     }
// }
// to overcome this we will be using discriminated unioin wehre the unoin is of 
// two types and based upon keys we check it and complete it 

type sucessfull={
    status:"sucess"
    date:{name:string,yes:Date}

}

type Errors={
    status:"Error"
    error:string
}
type sucess=sucessfull|Errors
function Issucess(res:sucess){
    if(res.status==="sucess"){
        console.log(res.date.name)
    }else{
        console.log(res.error.length)
    }
}
// to


function sum(a:number[],b:number): number[] 
function sum(a:number,b:number): number
function sum(a: any, b:any): any { 
    return a
}

const n1: string | undefined = undefined;

const func1 = (a: string) => a;

func1(n1!)

const d=sum(1,2)
const ss=sum([1,2],3)

const Priorities=["high","medium","low"]
type priority=(typeof Priorities )[number]
type Todo2={
    title:string
    description :string
}
function isfunc(obj:Todo2){
    if(isobj(obj.description)){
        obj.description
    }
}
function isobj(description:string):description is priority{
    return Priorities.includes(description as priority) 
}

export type User={
    name:string
    age:number
}
export const me :User={
    name:"ni",
    age:20
}
import {time} from "loadash"
time(4)