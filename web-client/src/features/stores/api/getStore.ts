import { Store } from "../types/Store";

export const getStore = async (id: string): Promise<Store> => {
  return {
    id: id,
    name: "",
    description: "",
    specificationFile: "",
    icon: "",
  };
};
