import { EditTask } from "./EditTask"
import { useState, useEffect } from "react";

export const ToDo = ({ task, index, taskList, setTaskList }) => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10

            )
        }
        else if (!isRunning) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]

    )

    const manageDelete = itemId => {
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1);
        setTaskList((currentTasks => currentTasks.filter
            (todo => todo.id !== itemId)
        ))
    }
    return (
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
                <div className="w-full flex flex-row justify-between">
                    <p className="font-semibold text-xl">{task.projectName}</p>
                    <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
                </div>
                <p className="text-lg py-2">{task.taskDescription}</p>
                <div className="w-full flex flex-row items-center justify-around">
                    <div className="  w-1/4   text-xl font-semibold py-4" >
                        <span>{("0" + Math.floor((time / 360000) % 24)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                        <span className="text-sm"
                        >  {("0" + ((time / 10) % 100)).slice(-2)}</span>
                    </div>
                    <div className=" flex flwx-row justify-evenly gap-4">
                        {isRunning ? (
                            <>
                                <button className="border rounded-lg py-1 px-3"
                                    onClick={() => {
                                        setIsRunning(false)
                                    }

                                    }
                                >Stop</button>
                            </>
                        ) :
                            (<>
                                <button className="border rounded-lg py-1 px-3"
                                    onClick = {()=> {setIsRunning(true)}}
                                >Start</button>
                            </>)}
                        <button className="border rounded-lg py-1 px-3"
                        onClick ={() =>{setTime(0)}}
                        >Reset</button>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-center">
                    <button

                        className="bg-red-500 text-white 
                    text-sm uppercase font-semibold py-1.5
                    px-3 mt-6 mb-1 rounded-lg"

                        onClick={manageDelete}
                    >

                        Delete</button>
                </div>
            </div>
        </>
    )
}