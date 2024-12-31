"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Tag from "./Tag";


interface TaskFormProps {
  onAddTask: (task: string, deadline?: string, status?: string, tag?: Array<string>) => void;
}

interface TaskFormInputs {
  task: string;
  status: string;
  deadline: string;
  tag: Array<string>;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const { register, handleSubmit, reset, watch } = useForm<TaskFormInputs>({
    defaultValues: {
      task: "",
      status: "todo",
      deadline: "",
      tag: [],
    },
  });
  const [hasDeadline, setHasDeadline] = useState(false);

  const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
    if (data.task.trim()) {
      onAddTask(data.task, data.deadline, data.status);
      reset(); 
      setHasDeadline(false);
      console.log(data);
    }
  };

  const watchDeadline = watch("deadline");

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 p-4"
      >
        <input
          type="text"
          {...register("task", { required: true })}
          placeholder="Add a new task..."
          className="px-6 py-2 bg-gray-white border border-bice-blue rounded-md w-3/5 placeholder-dark"
        />

        <div className="flex items-center justify-between gap-2 w-3/5">
          <div className="flex flex-wrap gap-2">
            <Tag tagName="Tugas" />
            <Tag tagName="Belajar" />
            <Tag tagName="---" />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hasDeadline}
              onChange={(e) => setHasDeadline(e.target.checked)}
              id="deadline-toggle"
              className="h-4 w-4"
            />
            <label htmlFor="deadline-toggle" className="text-sm text-black">
              Add a deadline
            </label>
          </div>

          {hasDeadline && (
            <input
              type="date"
              {...register("deadline")}
              value={watchDeadline}
              className="w-1/6 px-4 py-2 border rounded-md"
            />
          )}

          <div className="flex flex-wrap gap-2">
            <select
              {...register("status")}            
              className="border border-dark rounded-md font-light px-3 py-2 text-sm text-left text-blue-700 hover:cursor-pointer"
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button
              type="submit"
              className="px-3 py-2 bg-bice-blue text-white rounded-md hover:bg-blue-600"
            >
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TaskForm;
