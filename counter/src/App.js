import React from "react";
import Counter from "./components/Counter"
import { CssBaseline, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h2" align="center" gutterBottom>
      Sayaç Uygulaması
      </Typography>
      <Counter />
    </Container>
  );
}

export default App;
