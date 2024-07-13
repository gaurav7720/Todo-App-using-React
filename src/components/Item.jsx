import "../App.css";

function Item({ TodoItem, DueDate, onDeleleClick }) {
  return (
    <div>
      <div className="row gb-row">
        <div className="col">{TodoItem}</div>
        <div className="col">{DueDate}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success gb-button"
            onClick={() => onDeleleClick(TodoItem)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
