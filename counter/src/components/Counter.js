import React from "react";
import { observer } from "mobx-react-lite";
import { Button,Typography,Box } from "@mui/material";
import cs from "../stores/CounterStore";
const Counter = observer(() => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        
      <Typography variant="h4">Counter: {cs.count}</Typography>

      <Box mt={3}>

        <Button
          variant="contained"
          color="primary"
          onClick={() => cs.increment()}
          style={{ marginRight: "10px" }}
        >
          Artır
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => cs.decrement()}
        >
          Azalt
        </Button>
      </Box>
    </Box>
  );
});

export default Counter;
