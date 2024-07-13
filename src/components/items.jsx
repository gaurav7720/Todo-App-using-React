import Item from "./Item";
const Items = ({ todoItems, onDeleleClick }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <Item
          TodoItem={item.name}
          DueDate={item.deuDates}
          onDeleleClick={onDeleleClick}
        ></Item>
      ))}
    </div>
  );
};
export default Items;
