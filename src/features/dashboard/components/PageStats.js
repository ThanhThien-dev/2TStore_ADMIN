import BuildingStorefrontIcon from "@heroicons/react/24/outline/BuildingStorefrontIcon";
import CubeIcon from "@heroicons/react/24/outline/CubeIcon";

function PageStats({}) {
  return (
    <div className="stats bg-base-100 shadow">
      <div className="stat">
        <div className="stat-figure invisible md:visible">
          <BuildingStorefrontIcon className="w-8 h-8" />
        </div>
        <div className="stat-title">Tổng sản phẩm trong kho</div>
        <div className="stat-value">256</div>
        <div className="stat-desc">Nhiều hơn 21% so với tháng trước</div>
      </div>

      <div className="stat">
        <div className="stat-figure invisible md:visible">
          <CubeIcon className="w-8 h-8" />
        </div>
        <div className="stat-title">Số lượng hàng nhập</div>
        <div className="stat-value">25</div>
        <div className="stat-desc">Ít hơn 14% so với tháng trước</div>
      </div>
    </div>
  );
}

export default PageStats;
