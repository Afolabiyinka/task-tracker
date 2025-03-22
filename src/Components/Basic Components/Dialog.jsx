import { Dialog, Typography, IconButton } from "@material-tailwind/react";
import { Xmark } from "iconoir-react";
import { useState } from "react";

export default function DialogDemo({ open, onClose }) {
  const [error, setError] = useState(null);

  const handleClose = () => {
    try {
      onClose();
    } catch (err) {
      setError("Failed to close the dialog.");
      console.error(err);
    }
  };

  return (
    <Dialog open={open} handler={handleClose}>
      <Dialog.Overlay>
        <Dialog.Content>
          <div className="flex items-center justify-between gap-4">
            <Typography type="h6">Material Tailwind</Typography>
            <IconButton
              size="sm"
              variant="ghost"
              color="secondary"
              className="absolute right-2 top-2"
              isCircular
              onClick={handleClose}
            >
              <Xmark className="h-5 w-5" />
            </IconButton>
          </div>
          {error && (
            <Typography className="text-red-500 text-sm">{error}</Typography>
          )}
          <Typography className="mb-6 mt-2 text-foreground">
            Material Tailwind is an open-source library that uses the power of
            Tailwind CSS and React to help you build unique web projects faster
            and easier. The stunning design inspired by Material Design is a
            bonus! Get Material Tailwind and take advantage of its free
            components and features that will help you set up your web project
            quickly.
          </Typography>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
