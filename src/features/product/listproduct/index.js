import React, { useEffect, useState } from "react";
import PencilSquareIcon from "@heroicons/react/24/outline/PencilSquareIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

import SearchBar from "../../../components/Input/SearchBar";
import ModalProducts from "./modalProducts";

const fetchProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

function ListProduct() {
  const [productsList, setProductsList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProductsList(products);
    };
    getProducts();
  }, []);

  const handleAdd = (product) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        img: product.img,
        title: product.title,
        price: product.price,
      }),
    }).then((res) => res.json());
  };

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
              <img className="mb-2" src={product.images} alt="Product" />
              <p className="text-gray">{product.title}</p>
              <p className="font-bold">{product.price}$</p>
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
