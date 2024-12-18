import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { List, TextField, Button, Box } from "@mui/material";
import todoStore from "../stores/todoStore";
import TodoItem from "./components/TodoItem";

const TodoList = observer(() => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      todoStore.addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <Box>
      <TextField
        label="New Todo"
        variant="outlined"
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo} fullWidth>
        Add Todo
      </Button>
      <List>
        {todoStore.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Box>
  );
});

export default TodoList;
