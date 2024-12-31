import Tag from "./Tag";
import Trash from "../assets/trash.png";

const TaskCard = () => {
  return (
    <article className="m-4 border bg-white p-2 rounded-sm">
      <p className="text-left font-mono font-thin">This is sample text.</p>

      <div>
        <div className="flex flex-start gap-1 mt-2">
          <Tag tagName="Tugas" />
          <Tag tagName="Belajar" />
          <Tag tagName="---" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <img src={Trash} alt="Delete" className="size-5 mt-3 opacity-30 hover:opacity-100 hover:cursor-pointer"/>
        <div className="flex gap-2">  
            <button className="mt-3 font-light text-right w-auto p-1 text-xs border hover:bg-columbia-blue transition-colors duration-300">Try to do it</button>
            <button className="mt-3 font-light text-right w-auto p-1 text-xs border hover:bg-columbia-blue transition-colors duration-300">Done</button>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
