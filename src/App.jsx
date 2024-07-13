import AddTodo from "./components/Add-Todo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";

import Items from "./components/items";
import Container from "./components/Container";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const [todoItems, settodoItems] = useState([
    {
      name: "Buy Milk",
      deuDates: "07/02/2024",
    },
    {
      name: "Go to College",
      deuDates: "15/07/2024",
    },
  ]);
  const handleNewItem = (itemName, itemDeuDate) => {
    console.log(`New Item:${itemName} Date:${itemDeuDate}`);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        deuDates: itemDeuDate,
      },
    ];
    settodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
  };
  return (
    <Container>
      <AppName></AppName>

      <AddTodo handleNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <Items todoItems={todoItems} onDeleleClick={handleDeleteItem}></Items>
    </Container>
  );
}

export default App;
