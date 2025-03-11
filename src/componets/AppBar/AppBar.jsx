import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";

const AppBar = () => {
  return (
    <header
      className="absolute
 top-0 left-0 w-full bg-gradient-to-r bg-gray-100 text-gray-900 p-6 shadow-lg px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <section>
          <h2 className="text-lg font-bold">Tasks</h2>
          <TaskCounter />
        </section>
        <section>
          <h2 className="text-lg font-bold">Filter by status</h2>
          <StatusFilter />
        </section>
      </div>
    </header>
  );
};
export default AppBar;
