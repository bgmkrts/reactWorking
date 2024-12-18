import React from "react";
import TodoList from "./components/TodoList";
import { Container, CssBaseline, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Typography variant="h4" align="center" gutterBottom>
        Todo List with MobX and Material-UI
      </Typography>
      <TodoList />
    </Container>
  );
}

export default App;
