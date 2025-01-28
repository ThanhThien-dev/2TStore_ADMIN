import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import ListProducts from "../../features/product/listproduct";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Danh Sách Sản Phẩm" }));
  });
  return <ListProducts />;
}

export default InternalPage;
