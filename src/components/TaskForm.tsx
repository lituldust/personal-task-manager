"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Tag from "./Tag";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";


interface TaskFormProps {
  onAddTask: (
    task: string,
    deadline?: string,
    status?: string,
    tags?: string[]
  ) => void;
}

interface TaskFormInputs {
  task: string;
  status: string;
  deadline: string;
  tags: string[];
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const { register, handleSubmit, reset, setValue, watch } =
    useForm<TaskFormInputs>({
      defaultValues: {
        task: "",
        status: "todo",
        deadline: "",
        tags: [],
      },
    });

  const [hasDeadline, setHasDeadline] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
    if (selectedTags.length === 0) {
      setShowAlert(true);
      return;
    }
    if (data.task.trim()) {
      onAddTask(data.task, data.deadline, data.status, data.tags);
      reset();
      setHasDeadline(false);
      setSelectedTags([]);
      console.log(data);
    }
  };

  const watchDeadline = watch("deadline");

  const selectTag = (tag: string) => {
    setSelectedTags((prevTags) => {
      const newTags = prevTags.includes(tag)
        ? prevTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevTags, tag];

      setValue("tags", newTags);

      return newTags;
    });
  };

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
          className="w-3/5 px-6 py-2 bg-gray-white border border-bice-blue rounded-md placeholder-dark"
        />

        <div className="flex items-center gap-2 w-3/5 justify-start">
          <input
            type="checkbox"
            checked={hasDeadline}
            onChange={(e) => setHasDeadline(e.target.checked)}
            id="deadline-toggle"
            className="relative w-4 h-4 border-2 border-bice-blue rounded-sm bg-white checked:!bg-bice-blue checked:border-0"
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
            className="w-3/5 px-4 py-2 border rounded-md"
          />
        )}

        <div className="flex items-center justify-between gap-2 w-3/5">
          <div className="flex flex-wrap gap-2">
            <Tag
              tagName="Tugas"
              selectTag={selectTag}
              isSelected={selectedTags.includes("Tugas")}
            />
            <Tag
              tagName="Belajar"
              selectTag={selectTag}
              isSelected={selectedTags.includes("Belajar")}
            />
            <Tag
              tagName="Lain-lain"
              selectTag={selectTag}
              isSelected={selectedTags.includes("Lain-lain")}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              {...register("status", { required: true })}
              className="border border-dark rounded-md font-light px-3 py-2 text-sm text-left text-blue-700 hover:cursor-pointer w-20"
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

        {showAlert && (
          <Alert
            color="failure"
            onDismiss={() => setShowAlert(false)}
            icon={HiInformationCircle}
            className="absolute top-1 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out z-50"
          >
            Please select at least one tag.
          </Alert>
        )}
      </form>
    </>
  );
}

export default TaskForm;
