import React, { useEffect, useState } from "react";
import PencilSquareIcon from "@heroicons/react/24/outline/PencilSquareIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

import { getAllProduct, addProduct } from "../../../services/productService";
import SearchBar from "../../../components/Input/SearchBar";
import ModalProducts from "./modalProducts";

function ListProduct() {
  const [productsList, setProductsList] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await getAllProduct();
    setProductsList(products || []);
  };

  const handleAdd = async (product) => {
    try {
      const newProduct = await addProduct({
        name: product.title,
        img: product.img,
        price: product.price,
        description: product.description,
        category: product.category,
        brand: product.brand,
      });
      if (newProduct) {
        fetchProducts(); // Cập nhật lại danh sách sản phẩm sau khi thêm
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  console.log("LIST PRODUCT: ", productsList);

  return (
    <>
      <div className="flex justify-between">
        <div>
          <SearchBar />
        </div>
        <div>
          <button
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-green-700"
            onClick={() => setIsModalOpen(true)}
          >
            Thêm mới
          </button>
        </div>
      </div>
      <ModalProducts
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAdd}
      />
      <div className="divider mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {productsList &&
          productsList.map((product) => (
            <div
              key={product.id}
              className="card w-full p-6 bg-base-100 shadow-xl "
            >
              <img
                className="mb-2"
                src="https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"
                alt="Product"
              />
              <p className="text-gray">{product.name}</p>
              <p className="font-bold">
                {product.ProductDetails?.[0]?.selling_price
                  ? `${product.ProductDetails[0].selling_price}$`
                  : "N/A"}
              </p>
              <div className="flex justify-evenly mt-2">
                <div>
                  <button
                    className="btn hover:bg-yellow-500 text-white bg-blue-500 px-4 py-2"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <PencilSquareIcon className="h-5 inline-block w-5" />
                    <span>Chỉnh sửa</span>
                  </button>
                </div>
                <div>
                  <button className="btn hover:bg-red-500 text-red bg-white-500 px-4 py-2">
                    <TrashIcon className="h-5 inline-block w-5" />
                    <span>Xóa</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ListProduct;
