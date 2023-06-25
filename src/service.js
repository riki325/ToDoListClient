import axios from 'axios';

axios.defaults.baseURL =  "https://localhost:7157";

export default {


 getTasks: async () => {
    const result = await axios.get(`/todoItems`)
    return result.data;
  }, 

  addTask: async(task)=>{
    const result=await axios.post(`/todoItems`,{name:task, isComplete:false}).then(function (response) {
      console.log(response);  
        return result.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  setCompleted: async(id, isComplete)=>{
await axios.put(`/todoItems/${id}?isComplete=${isComplete}`).then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});   
  },
  deleteTask:async(id)=>{  
    const result=await axios.delete(`/todoItems/${id}`).then(function (response) {
      console.log(response); 
      return result.data;
    })
    .catch(function (error) {
      console.log(error);
    });
 
  }
};
