import TaskCard from "./TaskCard";

interface Props {
  secName: string;
  imageSrc: string;
}

const TaskSection = ({ secName, imageSrc }: Props) => {
  return (
    <section className="w-1/3 m-1 text-center text-black font-bold">
      <div className="ml-6 flex flex-start gap-2 items-center">
        <img src={imageSrc} alt={`${secName} icon`} className="size-6"/>
        <h2 className="font-medium text-left">
          {secName}
        </h2>
      </div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </section>
  );
};

export default TaskSection;
