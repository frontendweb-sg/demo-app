import { useState, useCallback } from "react";

/**
 * Toggle hook
 * @returns
 */
export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleToggle = useCallback(
    () => setOpen((prevState) => !prevState),
    []
  );

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle,
  };
};
