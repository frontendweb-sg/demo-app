"use client";
import { useAppStore } from "@/providers/AppProvider";
import Modal from "./Modal";
import { AppContent } from "@/utils/AppContent";

/**
 * Confirmation component
 * @returns
 */
const ConfirmationDialog = () => {
  const { confirmState, handleConfirmCancel } = useAppStore();
  return (
    <Modal
      size="xs"
      onClose={handleConfirmCancel}
      open={confirmState.open}
      label={confirmState.title}
    >
      <p className="text-sm mb-3 block">{confirmState.subtitle}</p>
      <div className="flex items-center justify-end mt-3">
        <button onClick={handleConfirmCancel} color="secondary" type="button">
          {AppContent.cancel}
        </button>
        <button className="ml-2" type="button" onClick={confirmState.onSubmit}>
          {AppContent.ok}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
