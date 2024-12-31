import { useState } from "react";
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskSection from "./components/TaskSection";
import Todo from "./assets/to-do-list.png";
import Ongoing from "./assets/support.png";
import Finish from "./assets/complete.png";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div> 
        <Header />
        <main className="">
          <TaskForm onAddTask={addTask}/>
          <div className="flex justify-evenly">
            <TaskSection secName="To Do" imageSrc={Todo}/>
            <TaskSection secName="Ongoing" imageSrc={Ongoing}/>
            <TaskSection secName="Finished" imageSrc={Finish}/>
          </div>
        </main>  
      </div>
    </>
  )
}

export default App
