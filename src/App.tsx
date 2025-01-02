import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskSection from "./components/TaskSection";
import Todo from "./assets/to-do-list.png";
import Ongoing from "./assets/support.png";
import Finish from "./assets/complete.png";

const oldTasks = localStorage.getItem("tasks") as string;

function App() {
  const [tasks, setTasks] = useState<any[]>(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskId: number) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleUpdateDeadline = (taskId: number, newDeadline: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, deadline: newDeadline } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = (
    task: string,
    deadline?: string,
    status?: string,
    tags: string[] = []
  ) => {
    const newTask = {
      id: Date.now(), 
      task,
      deadline,
      status,
      tags,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
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
              handleUpdateDeadline={handleUpdateDeadline}
            />
            <TaskSection
              secName="Ongoing"
              imageSrc={Ongoing}
              tasks={tasks}
              status="doing"
              handleDelete={handleDelete}
              handleUpdateDeadline={handleUpdateDeadline}
            />
            <TaskSection
              secName="Finished"
              imageSrc={Finish}
              tasks={tasks}
              status="done"
              handleDelete={handleDelete}
              handleUpdateDeadline={handleUpdateDeadline}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
