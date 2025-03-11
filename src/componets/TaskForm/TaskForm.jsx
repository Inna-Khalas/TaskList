import toast from "react-hot-toast";
import { addTask } from "../../redux/taskSlice";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const taskText = form.elements.text.value.trim();
    if (!taskText) {
      toast.error("Заповніть поле вводу", {
        position: "top-center",
      });
      return;
    }

    dispatch(
      addTask({
        id: crypto.randomUUID(),
        completed: false,
        text: taskText,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 ">
      <input
        type="text"
        name="text"
        className="border p-2 rounded-lg flex-1 focus:ring-2 focus:ring-blue-400"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
export default TaskForm;
