import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import OrderDetail from "../../features/orderDetail";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Chi tiết đơn hàng" }));
  }, []);

  return <OrderDetail />;
}

export default InternalPage;
