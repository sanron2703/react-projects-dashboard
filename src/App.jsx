import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId : undefined,
    project: [],
    task: []
  })

  function handleProjectState(){
    setProjectState(preProject => {
      return {
        ...preProject,
        selectedProjectId : null
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(preProject => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...preProject,
        selectedProjectId : undefined,
        project: [...projectState.project, newProject]
      }
    })
  }

  function handleCancleProject(){
   setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined
    }
   })
  }

  function handleSelectedProject(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleDeleteProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.project.filter((proj)=> proj.id !== prevState.selectedProjectId)
      }
    })
  }

  function handleTaskProject(text){
    setProjectState(prevState => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      }
      return{
        ...prevState,
        task: [newTask, ...prevState.task]
      }
    })
  }

  function handleTaskDelete(id){
    setProjectState(prevState => {
      return{
        ...prevState,
        task: prevState.task.filter((task)=> task.id !== id)
      }
    })
  }

  const selectedProject = projectState.project.find(project => project.id === projectState.selectedProjectId)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onDeleteTask={handleTaskDelete} onAddTask={handleTaskProject} tasks={projectState.task}/>

  if(projectState.selectedProjectId === null ){
    content = <NewProject onAdd={handleAddProject} onCancle={handleCancleProject}/>
  } else if(projectState.selectedProjectId === undefined){
    content = <NoProject projectState={handleProjectState} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar projectState={handleProjectState} project={projectState.project} onSelectedProject={handleSelectedProject} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
