import axios from 'axios'
const baseUrl = "https://mern-app-home-work-list.onrender.com";

 const getAllToDo=(setToDo)=>{
    axios.get(baseUrl).then(({data})=>{console.log('Data-->',data)
    setToDo(data);
})
 }
const addToDo=(text,setText,setToDo)=>{
    axios
      .post(`${baseUrl}/saveToDo`, { text })
      .then(({ data }) => {
        console.log("Data-->", data);
        setText("");
        getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
}
const updateToDo=(toDoId,text,setToDo,setText,setIsUpdating)=>{
    axios.post(`${baseUrl}/updateToDo`,{_id:toDoId,text})
    .then(({data})=>{console.log('Data-->',data)
    setText("");
    setIsUpdating(false)
    getAllToDo(setToDo);
}).catch((err)=>console.log(err));
}

const deleteToDo=(_id,setToDo)=>{
    axios.post(`${baseUrl}/deleteToDo`,{_id})
    .then(({data})=>{console.log('Data-->',data)
    getAllToDo(setToDo);
}).catch((err)=>console.log(err));
   
 }
 export{getAllToDo,addToDo,updateToDo,deleteToDo}