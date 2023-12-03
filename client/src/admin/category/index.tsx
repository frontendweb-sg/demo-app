import Modal from "@/components/common/Modal";
import PageTitle from "@/components/common/PageTitle";
import Panel from "@/components/common/Panel";
import Button from "@/components/common/Button";
import CategoryForm from "./CategoryForm";
import { useToggle } from "@/hooks/useToggle";
import { FaHome } from "react-icons/fa";
import { AppContent } from "@/utils/AppContent";
import { useEffect } from "react";
import { fetchCategories } from "@/stores/actions/category";
import { useAppStore } from "@/providers/AppProvider";

/**
 * Admin category page
 * @returns
 */
const AdminCategory = () => {
  const { open, handleOpen, handleClose } = useToggle();
  const { category, dispatch } = useAppStore();

  useEffect(() => {
    // fetchCategories(dispatch);
  }, [dispatch]);

  return (
    <>
      <PageTitle label="Category" tagline="Welcome to category">
        <Button onClick={handleOpen} startIcon={<FaHome className="mr-2" />}>
          {AppContent.addCategory}
        </Button>
      </PageTitle>
      <Panel>{JSON.stringify(category)}</Panel>
      <Modal open={open} label="Add category" onClose={handleClose} size="sm">
        <CategoryForm />
      </Modal>
    </>
  );
};

export default AdminCategory;
