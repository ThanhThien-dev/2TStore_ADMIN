import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import Brands from "../../features/product/brands";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Thương Hiệu" }));
  }, []);

  return <Brands />;
}

export default InternalPage;
