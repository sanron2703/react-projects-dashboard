import { useState } from "react"

export default function NewTask({addTask}){
    const [enteredTask, setEneteredTask] = useState('')

    function handleChanges(event){
        setEneteredTask(event.target.value)
    }

    function handleAddTask(){
        if(enteredTask.trim() === ''){
            return;
        }

        addTask(enteredTask)
        setEneteredTask('')
    }

    return(
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChanges} value={enteredTask}/>
            <button className="text-stone-700 hover:text-stone-900" onClick={handleAddTask}>Add Task</button>
        </div>
    )
}