import { useState } from "react";
import Tag from "./Tag";
import Trash from "../assets/trash.png";

interface TaskCardProps {
  task: {
    id: number;
    task: string;
    deadline?: string;
    tags: string[];
    status: string;
  };
  handleDelete: (taskId: number) => void;
  handleUpdateDeadline: (taskId: number, newDeadline: string) => void;
}

const TaskCard = ({ task, handleDelete, handleUpdateDeadline  }: TaskCardProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isEditingDeadline, setIsEditingDeadline] = useState(false);
  const [newDeadline, setNewDeadline] = useState(task.deadline || "");

  const toggleEditing = () => setIsEditingDeadline(!isEditingDeadline);

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDeadline(e.target.value);
  };

  const saveDeadline = () => {
    handleUpdateDeadline(task.id, newDeadline);
    toggleEditing();
  };

  const selectTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <article className="m-4 border bg-white p-2 rounded-sm">
      <p className="text-left font-mono font-thin">{task.task}</p>

      <div>
        <div className="flex flex-start gap-1 mt-2">
          {task.tags.map((tag) => (
            <Tag
              key={tag}
              tagName={tag}
              selectTag={selectTag}
              isSelected={true}
            />
          ))}
        </div>
      </div>

      <div className="text-left text-sm font-normal mt-2">
        {isEditingDeadline ? (
          <div>
            <input
              type="date"
              value={newDeadline}
              onChange={handleDeadlineChange}
              className="border rounded p-1"
            />
            <button onClick={saveDeadline} className="ml-2 text-sapphire hover:underline px-2 text-xs">
              Save
            </button>
          </div>
        ) : (
          <p>
            {task.deadline ? `Due: ${task.deadline}` : "No due date"}
            <button
              onClick={toggleEditing}
              className="ml-2 text-sapphire hover:underline px-2 text-xs"
            >
              Edit
            </button>
          </p>
        )}
      </div>

      <div className="flex justify-end items-center">
        <img
          src={Trash}
          alt="Delete"
          className="size-5 m-2 opacity-30 hover:opacity-100 hover:cursor-pointer"
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </article>
  );
};

export default TaskCard;
