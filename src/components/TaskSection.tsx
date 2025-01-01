import TaskCard from "./TaskCard";

interface TaskSectionProps {
  secName: string;
  imageSrc: string;
  tasks: any[];
  status: string;
  handleDelete: (taskIndex: number) => void;
}

const TaskSection = ({ secName, imageSrc, tasks, status, handleDelete }: TaskSectionProps) => {
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <section className="w-1/3 m-1 text-center text-black font-bold">
      <div className="ml-6 flex flex-start gap-2 items-center">
        <img src={imageSrc} alt={`${secName} icon`} className="size-6"/>
        <h2 className="font-medium text-left">
          {secName}
        </h2>
      </div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => (
          <TaskCard key={index} task={task} handleDelete={handleDelete} index={index}/>
        ))
      ) : (
        <p className="my-4">No tasks in this section.</p>
      )}
    </section>
  );
};

export default TaskSection;
