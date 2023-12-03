import { Api } from "@/instance";
import { AxiosResponse } from "axios";

const SERVICE_API_URL = import.meta.env.VITE_APP_API_URL + "/category";

class CategoryService {
  getIntialValues() {
    return {
      title: "",
      slug: "",
      description: "",
      active: false,
    };
  }

  getAll(): Promise<AxiosResponse<ICategory[]>> {
    return Api.get(SERVICE_API_URL);
  }
  add(body: ICategory): Promise<AxiosResponse<ICategory>> {
    return Api.post(SERVICE_API_URL, body);
  }
  update(id: string, body: ICategory): Promise<AxiosResponse<ICategory>> {
    return Api.put(`${SERVICE_API_URL}/${id}`, body);
  }
  delete(id: string): Promise<AxiosResponse<{ id: string }>> {
    return Api.delete(`${SERVICE_API_URL}/${id}`);
  }
}
const categoryService = new CategoryService();
export { categoryService };
