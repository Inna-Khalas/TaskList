import { setStatusFilter } from "../../redux/filterSlice";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";

const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleStatusFilter = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className="flex gap-2">
      <Button onClick={() => handleStatusFilter("all")}>All</Button>
      <Button onClick={() => handleStatusFilter("active")}>Active</Button>
      <Button onClick={() => handleStatusFilter("completed")}>Completed</Button>
    </div>
  );
};

export default StatusFilter;
