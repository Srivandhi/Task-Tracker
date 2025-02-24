
import { useState } from "react";

export const AddTask = ({ taskList, setTaskList }) => {
    const [addModal, setAddModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInput = e => {
        const { name, value } = e.target;

        if (name === "projectName")
        {
            setProjectName(value);
            setErrorMessage("");
        }
        if (name === "projectName" && value === "") {
            setErrorMessage("Enter the Project name to continue")
        }
        if (name === "taskDescription")
            setTaskDescription(value);
    }
    const handleAdd = (e) => {
        e.preventDefault();
        if (!projectName) {
            setErrorMessage("Enter the Project name to continue")
        }
        else {

            let timestamp = new Date();
            let tempList = taskList;
            tempList.push({
                projectName,
                taskDescription,
                timestamp:timestamp,
                duration:0
            })

            localStorage.setItem("taskList",JSON.stringify(tempList));
            window.location.reload()
            setAddModal(false);
            setProjectName("");
            setTaskDescription("");
        }
    };


    return (
        <>
            <button className="border rounded bg-blue-500 text-white
             uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 hover:opacity-70"
                type="button" onClick={() => setAddModal(true)}>+New</button>

            {
                addModal ? (
                    <>
                        <div className=" flex items-center justify-center overflow-x-hidden 
                                        overflow-y-auto fixed inset-0 z-100 ">
                            <div className="w-9/12 bg-white  rounded-lg shadow-md relative max-w-lg
                            flex flex-col">
                                <div className=" flex flex-row  justify-between p-5 border-b
                                border-slate-200 rounded-t">
                                    <h3 className=" text-3xl font-semibold">Add New Task</h3>
                                    <button className="px-5 text-gray-400 float-right text-3xl
                                                 leading-none font-semibold block right-0"
                                        onClick={() => setAddModal(false)}>x</button>
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
                                            <p className="text-red-500 text-center mt-2 mb-5">
                                                {errorMessage}
                                            </p>
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
                                            onClick={handleAdd}
                                        >
                                            Add Task
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