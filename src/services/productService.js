import { get, post } from "../utils/httpRequest"; // Thêm import `post`

export const getAllProduct = async () => {
  try {
    const res = await get("products/");
    return res || null;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export const getProductBySlug = async (name) => {
  try {
    const res = await get(`productBySlug/${name}`);
    return res || null;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
};

export const addProduct = async (productData) => {
  try {
    return await post("products/add", productData);
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
