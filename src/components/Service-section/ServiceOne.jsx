import { listOne } from "../../data/list";
import { List } from "../List";

export default function ServiceOne() {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Work with tools you already use
        </h2>
        <p className="mb-8 font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>
        <List items={listOne} />
        <p className="font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.
        </p>
      </div>
      <div>
        <img src="src\assets\features\feature-1.png" alt="" />
      </div>
    </div>
  );
}
