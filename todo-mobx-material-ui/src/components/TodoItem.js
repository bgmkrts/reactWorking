import React from "react";
import { observer } from "mobx-react-lite";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import todoStore from "../stores/todoStore";

const TodoItem = observer(({ todo }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => todoStore.removeTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => todoStore.toggleTodo(todo.id)}
      />
      <ListItemText
        primary={todo.title}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      />
    </ListItem>
  );
});

export default TodoItem;
