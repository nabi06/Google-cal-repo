type todo={
  id:number
  name:string
  completed:boolean
}


const form = document.querySelector<HTMLFormElement>("#new-todo-form")!
const todoinp = document.querySelector<HTMLInputElement>("#input")!
const list = document.querySelector<HTMLUListElement>("#list")!
let todos:todo[]=[]
form.addEventListener("submit", (e) =>{
  e.preventDefault()
  console.log("hello")
  const inpname=todoinp.value
  if(inpname===null)return
  const newtodo={
    id:todos.length+1,
    name:inpname,
    completed:false
  }
  todos.push(newtodo)
  console.log(newtodo)
  rendertodo(newtodo)
  todoinp.value = ""
})
function rendertodo(todo:todo){
  const li=document.createElement("li")
  li.classList.add("list-item")

  const textlabel=document.createElement("label")
  textlabel.classList.add("list-item-label")

  const inpcheck=document.createElement("input")
  inpcheck.type="checkbox"
  inpcheck.checked=todo.completed
  inpcheck.classList.add("label-input")

  const spantext=document.createElement("span")
  spantext.classList.add("label-text")
  spantext.innerHTML=todo.name

  const btn=document.createElement("button")
  btn.innerHTML="delete"
  btn.classList.add("label-btn")

  btn.addEventListener("click",()=>{
    li.remove()
    todos=todos.filter(t=>t.id!==todo.id)
  })

  textlabel.append(inpcheck,spantext)
  li.append(textlabel,btn)
  list.append(li)
}