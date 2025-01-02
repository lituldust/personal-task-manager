import TaskCard from "./TaskCard";

interface TaskSectionProps {
  secName: string;
  imageSrc: string;
  tasks: any[];
  status: string;
  handleDelete: (taskId: number) => void;
  handleUpdateDeadline: (taskId: number, newDeadline: string) => void;
}

const TaskSection = ({
  secName,
  imageSrc,
  tasks,
  status,
  handleDelete, 
  handleUpdateDeadline
}: TaskSectionProps) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="w-1/3 m-1 text-center text-black font-bold">
      <div className="ml-6 flex flex-start gap-2 items-center">
        <img src={imageSrc} alt={`${secName} icon`} className="size-6" />
        <h2 className="font-medium text-left">{secName}</h2>
      </div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleUpdateDeadline={handleUpdateDeadline}
          />
        ))
      ) : (
        <p className="my-4">No tasks in this section.</p>
      )}
    </section>
  );
};

export default TaskSection;
