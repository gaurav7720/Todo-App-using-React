import { useState } from "react";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    handleNewItem(todoName, dueDate);

    setTodoName("");
    setDueDate("");
  };
  return (
    <div>
      <div className="row gb-row">
        <div className="col">
          <input
            className="input"
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success gb-button"
            onClick={handleAddButtonClick}
            value={dueDate}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
