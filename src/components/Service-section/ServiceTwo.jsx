import { listTwo } from "../../data/list";
import { List } from "../List";

export default function ServiceTwo() {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <div>
        <img src="images/features/feature-2.png" alt="" />
      </div>

      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          We invest in the world’s potential
        </h2>
        <p className="mb-8 font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>
        <List items={listTwo} />
        <p className="font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.
        </p>
      </div>
    </div>
  );
}
