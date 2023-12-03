import { categoryService } from "@/services/category.services";
import { toast } from "react-toastify";

export enum CategoryAction {
  CATEGORY_LOADING = "category loading",
  CATEGORY_FETCH = "category fetch all records",
  CATEGORY_DELETE = "category delete record",
  CATEGORY_UPDATE = "category update record",
  CATEGORY_ACTIVE = "category active record",
  CATEGORY_INACTIVE = "category inactive record",
}

export const fetchCategories = async (dispatch: Function) => {
  if (typeof dispatch !== "function")
    throw new Error("First parameter should be dispatcher");
  try {
    const response = await categoryService.getAll();
    console.log("res", response);
    dispatch({ type: CategoryAction.CATEGORY_FETCH, payload: response.data });
    toast.success("Catgory feched successfully!");
  } catch (error) {
    dispatch({ type: CategoryAction.CATEGORY_LOADING, payload: false });
    if (error instanceof Error) toast.error(error.message);
  }
};
