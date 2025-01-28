import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../common/headerSlice";

function ModalBrand({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name || !icon || !description) {
      dispatch(
        showNotification({
          message: "Vui lòng nhập đầy đủ thông tin!",
          status: 0,
        })
      );
      return;
    }
    onSubmit({
      name,
      icon,
      description,
    });
    // Reset modal
    setName("");
    setIcon("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => onClose()}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Thêm thương hiệu mới</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Tên thương hiệu(*)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên thương hiệu"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Icon URL(*)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            placeholder="Nhập icon URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Mô tả(*)</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Nhập mô tả thương hiệu"
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

export default ModalBrand;
