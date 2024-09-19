import CustomButton from "./CustomButton"
export default function ProjectSidebar({projectState, project, onSelectedProject, selectedProjectId}){
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 text-stone-200 font-bold md:text-xl uppercase">Your Projects</h2>
            <div>
                <CustomButton onClick={projectState}>+ Add Project</CustomButton>
            </div>
        <ul className="my-8">{ project.map((project)=> {
            let cssClass = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
            if(project.id === selectedProjectId){
                cssClass += 'text-stone-200 bg-stone-800'
            }else{
                cssClass += 'text-stone-400'
            }
            return (
                <li key={project.id}><button onClick={() => onSelectedProject(project.id)} className={cssClass}>{project.title}</button></li>
            )
        }
            
        )}
        </ul>
        </aside>
    )
}