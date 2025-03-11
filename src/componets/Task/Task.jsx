import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  toggleCompleted,
  editTask,
  startEditing,
  cancelEditing,
} from "../../redux/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const editingTask = useSelector((state) => state.tasks.editingTask);
  const isEditing = editingTask && editingTask.id === task.id;

  const handleEdit = () => {
    dispatch(startEditing(task));
  };

  const handleCancel = () => {
    dispatch(cancelEditing());
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: editingTask.text }));
  };

  const handleTextChange = (e) => {
    dispatch(startEditing({ ...editingTask, text: e.target.value }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
        className="mr-3 scale-125"
      />
      {isEditing ? (
        <input
          type="text"
          className="border p-2 rounded-lg flex-1 focus:ring-2 focus:ring-blue-400"
          defaultValue={task.text}
          onChange={handleTextChange}
        />
      ) : (
        <p
          className={`flex-1 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.text}
        </p>
      )}

      {isEditing ? (
        <>
          <button
            onClick={handleSave}
            className="ml-2  text-white px-2 py-1 rounded"
          >
            ✅
          </button>
          <button
            onClick={handleCancel}
            className="ml-2  text-white px-2 py-1 rounded"
          >
            ❌
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleEdit}
            className="ml-2 hover:bg-blue-500 text-white px-2 py-1 rounded"
          >
            ✏️
          </button>
          <button
            onClick={handleDelete}
            className="ml-2 hover:bg-red-500 text-white px-2 py-1 rounded"
          >
            🗑
          </button>
        </>
      )}
    </div>
  );
};
export default Task;
