import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskSection from "./components/TaskSection";
import Todo from "./assets/to-do-list.png";
import Ongoing from "./assets/support.png";
import Finish from "./assets/complete.png";

const oldTasks = localStorage.getItem("tasks") as string;
console.log(oldTasks);

function App() {
  
  const [tasks, setTasks] = useState<any[]>(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex: number) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleAddTask = (
    task: string,
    deadline?: string,
    status?: string,
    tags: string[] = []
  ) => {
    setTasks((prevTasks) => [...prevTasks, { task, deadline, status, tags }]);
  };

  return (
    <>
      <div>
        <Header />
        <main className="">
          <TaskForm onAddTask={handleAddTask} />
          <div className="flex justify-evenly border-top pt-3 border-bice-blue">
            <TaskSection
              secName="To Do"
              imageSrc={Todo}
              tasks={tasks}
              status="todo"
              handleDelete={handleDelete}
            />
            <TaskSection
              secName="Ongoing"
              imageSrc={Ongoing}
              tasks={tasks}
              status="doing"
              handleDelete={handleDelete}
            />
            <TaskSection
              secName="Finished"
              imageSrc={Finish}
              tasks={tasks}
              status="done"
              handleDelete={handleDelete}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
