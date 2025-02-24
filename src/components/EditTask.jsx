
import { useState,useEffect } from "react";
export const EditTask = ({task,index,taskList,setTaskList}) => {

    const[editModal, setEditModal] = useState(false);
    const [projectName,setProjectName] = useState('');
    const [taskDescription,setTaskDescription] = useState('');

    useEffect(() =>{
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription);
    },[])
    const handleInput = e =>{
            const{name,value} = e.target;
            
            if (name ==="projectName")
                setProjectName(value)
             if(name ==="taskDescription")
                setTaskDescription(value);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        let taskIndex  = taskList.indexOf(task);
        taskList.splice(taskIndex,1);
        setTaskList([...taskList, { projectName, taskDescription }]);
        setEditModal(false);
       
    };
    return (


        <>
            <button className="bg-gray-400 text-white text-sm uppercase 
            font-semiboldpy-1.5 px-3 rounded-lg"

            onClick={()=>setEditModal(true)}
            >Edit</button>
            {
                editModal ? (
                    <>
                        <div className=" flex items-center justify-center overflow-x-hidden 
                                        overflow-y-auto fixed inset-0 z-100 ">
                            <div className="w-9/12 bg-white  rounded-lg shadow-md relative max-w-lg
                            flex flex-col">
                                <div className=" flex flex-row  justify-between p-5 border-b
                                border-slate-200 rounded-t">
                                    <h3 className=" text-3xl font-semibold">Edit Task</h3>
                                    <button className="px-5 text-gray-400 float-right text-3xl
                                                 leading-none font-semibold block right-0"
                                        onClick={() => editModal(false)}>x</button>
                                </div>
                                <div>
                                    <form className="px-6 pt-6 pb-4">
                                        <div>
                                            <label className="track-wide uppercase text-gray-700 
                                    text-xs font-semibold mb-2 block"
                                                htmlFor="project-name"
                                            >Project Name</label>
                                            <input
                                                className="w-full
                                        bg-gray-200 
                                         text-gray-700 border
                                         border-gray-200 rounded
                                         py-3 px-4 mb-5
                                         leading-tight
                                         focus:outline-none
                                         focus:bg-white
                                        "
                                                name="projectName"
                                                onChange={handleInput}
                                                value={projectName}
                                                id="project-name"
                                                type="text"
                                                placeholder="enter project name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="track-wide uppercase text-gray-700 
                                    text-xs font-semibold mb-2 block"
                                                htmlFor="project-name"
                                            >Task Description

                                            </label>
                                            <textarea
                                                className="w-full
                                        bg-gray-200 
                                         text-gray-700 border
                                         border-gray-200 rounded
                                         py-3 px-4 mb-5
                                         leading-tight
                                         focus:outline-none
                                         focus:bg-white"
                                                name="taskDescription"
                                                value={taskDescription}
                                                onChange={handleInput}
                                                id="task-description"
                                                rows="5"
                                                placeholder="Task description"
                                            >

                                            </textarea>
                                        </div>

                                    </form>
                                    <div className="flex justify-end p-6 border-t border-slate-300 rounded">
                                        <button
                                            className="bg-blue-500
                                            text-white font-semibold uppercase text-sm px-6 py-3 rounded
                                            hover:opacity-70"
                                            onClick={handleUpdate}
                                        >
                                            Update Task
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </>
                ) : null
            }
        </>
    )
}