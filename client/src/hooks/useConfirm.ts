import { useState, useCallback } from "react";

/**
 * Toggle hook
 * @returns
 */
export interface ConfirmState {
  open: boolean;
  title: string;
  subtitle: string;
  onSubmit: () => void;
}
export const useConfirm = () => {
  const [confirmState, setConfigmState] = useState<ConfirmState>({
    open: false,
    title: "Delete",
    subtitle: "Are you sure?",
    onSubmit: () => {},
  });

  const handleConfirm = useCallback(
    (confirm: ConfirmState) =>
      setConfigmState((prevState) => ({ ...prevState, ...confirm })),
    []
  );
  const handleConfirmCancel = useCallback(
    () =>
      setConfigmState((prev) => ({
        ...prev,
        title: "Delete",
        subtitle: "Are you sure?",
        open: false,
      })),
    []
  );

  return {
    confirmState,
    handleConfirm,
    handleConfirmCancel,
  };
};
