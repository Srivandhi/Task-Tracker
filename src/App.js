
import './App.css';
import { useState } from "react";
import { AddTask } from './components/AddTask';
import { ToDo } from './components/ToDo';


function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
    let array = localStorage.getItem("taskList");

    if(array){
      setTaskList(JSON.parse(array));
    }
  },[])

  return (
    <div className="App">
      <h1 className=" text-2xl  py-4 pl-6 font-bold">The Task Tracker</h1>
      <p className="text-xl pl-6">Hi there</p>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6">Click</p>
        <AddTask taskList = {taskList}
              setTaskList = {setTaskList}/>
        <p className="text-xl my-2">to add task</p>
      </div>
      <div >
        <h1 className="ml-6 text-xl font-semibold w-3/4 
      max-w-lg my-4 py-2 px-4 bg-gray-200">To Do:</h1>
      {
        taskList.map((task,i)=>
           
            <ToDo  key={i} task={task} index={i} taskList={taskList} setTaskList = {setTaskList}/>

        )
      }
      </div>
    </div>
  );
}

export default App;
