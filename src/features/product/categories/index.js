import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} from "./categorySlice";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Khi có API thì thay mảng example thành biến categories
  const example = [];

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {example.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => dispatch(deleteCategory(category.id))}>
              Delete
            </button>
            <button
              onClick={() =>
                dispatch(updateCategory({ ...category, name: "Updated Name" }))
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch(
            addCategory({ id: new Date().getTime(), name: "New Category" })
          )
        }
      >
        Add Category
      </button>
    </div>
  );
};

export default CategoryList;
