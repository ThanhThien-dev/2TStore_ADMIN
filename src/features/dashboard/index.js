import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";

import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";
import SparklesIcon from "@heroicons/react/24/outline/SparklesIcon";
import TruckIcon from "@heroicons/react/24/outline/TruckIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DashboardTopBar from "./components/DashboardTopBar";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DoughnutChart from "./components/DoughnutChart";
import { useEffect, useState } from "react";

import { getAllProduct } from "../../services/productService";

const statsData = [
  {
    title: "Số lượng sản phẩm đã bán",
    value: "369",
    icon: <ShoppingCartIcon className="w-8 h-8" />,
    description: "↗︎ 2300 (22%)",
  },
  {
    title: "Tổng doanh thu",
    value: "$340,55",
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
    description: "Tháng hiện tại",
  },
  {
    title: "Đơn hàng đang giao",
    value: "45",
    icon: <TruckIcon className="w-8 h-8" />,
    description: "5 đơn đang gấp",
  },
  {
    title: "Tổng số đơn hoàn thành",
    value: "560",
    icon: <SparklesIcon className="w-8 h-8" />,
    description: "↙ 300 (18%)",
  },
];

function Dashboard() {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let products = await getAllProduct();
      console.log("Data received", products);

      setDataProduct(products); // Kiểm tra xem có phải là mảng không
    };
    getProducts();
  }, []);
  console.log("dataProduct: ", dataProduct);

  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>

      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <BarChart />
      </div>

      {/** ---------------------- Different stats content 2 ------------------------- */}

      <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <PageStats />
      </div>

      {/** ---------------------- User source channels table  ------------------------- */}

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <UserChannels />
        <DoughnutChart />
      </div>
    </>
  );
}

export default Dashboard;
