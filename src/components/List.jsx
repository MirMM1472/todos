import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

const TodosList = ({ data, onClick, handleRemove }) => {
  return (
    <List
      key={data.key}
      onDoubleClick={() => handleRemove(data.title)}
      onClick={() => onClick(data.userId)}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText primary={data.title} />
      </ListItem>
      <Divider />
    </List>
  );
};

export default TodosList;
