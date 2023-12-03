import { CategoryAction } from "../actions/category";

export type CategoryState = {
  loading: boolean;
  categories: ICategory[];
};

export const categoryState: CategoryState = {
  loading: false,
  categories: [],
};

type CategoryActions =
  | {
      type: CategoryAction.CATEGORY_LOADING;
      payload: boolean;
    }
  | { type: CategoryAction.CATEGORY_FETCH; payload: any };

const categoryReducer = (
  state: CategoryState,
  action: CategoryActions
): CategoryState => {
  const { type, payload } = action;
  switch (type) {
    case CategoryAction.CATEGORY_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case CategoryAction.CATEGORY_FETCH:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
export { categoryReducer };
