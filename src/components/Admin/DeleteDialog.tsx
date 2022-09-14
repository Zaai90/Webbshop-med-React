import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

interface Props {
  handleDelete: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteDialog = ({ handleDelete, isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>🍻 delete? 🥃 </DialogTitle>
      <DialogActions>
        <Button onClick={() => setIsOpen((prev) => !prev)}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => {
            setIsOpen((prev) => !prev);
            handleDelete();
          }}
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
