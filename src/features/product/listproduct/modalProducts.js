import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../common/headerSlice";

function ModalProducts({ isOpen, onClose, onSubmit }) {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!img || !title || !price) {
      dispatch(
        showNotification({
          message: "Vui lòng nhập đầy đủ thông tin!",
          status: 0,
        })
      );
      return;
    }
    onSubmit({
      img,
      title,
      price,
    });
    // Reset modal
    setImg("");
    setTitle("");
    setPrice("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box ">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => onClose()}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Thêm mới sản phẩm</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Hình ảnh(*)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Nhập link hình ảnh"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Tên sản phẩm(*)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Giá(*)</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Nhập giá sản phẩm"
          ></textarea>
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Hủy bỏ
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProducts;
