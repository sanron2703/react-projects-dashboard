import NewTask from "./NewTasks"

export default function Tasks({addTask, deleteTask, tasks}){
    console.log(tasks)
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask addTask={addTask} deleteTask={deleteTask} tasks={tasks}/>
            {tasks.length == 0 && <p className="text-stone-800 mb-4">This project does not have any task.</p>}
            {tasks.length >0 && 
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task)=> 
                    <li className="flex justify-between my-4 text-stone-800" key={task.id}>
                         <span>{task.text}</span>
                         <button className="text-stone-700 hover:text-red-500" onClick={()=> deleteTask(task.id)}>Clear</button>
                    </li>
                    )}
                </ul>
            }
            
        </section>
    )
}