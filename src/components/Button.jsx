import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Btn = ({ onClick, disabled }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button disabled={disabled} onClick={onClick} variant="contained">
        {disabled ? "Loading..." : "Fetch Todos"}
      </Button>
    </Stack>
  );
};

export default Btn;
