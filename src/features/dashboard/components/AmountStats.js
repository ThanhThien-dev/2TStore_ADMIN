function AmountStats({}) {
  return (
    <div className="stats bg-base-100 shadow">
      <div className="stat">
        <div className="stat-title">Số tiền cần thu</div>
        <div className="stat-value">$25,600</div>
        <div className="stat-actions">
          <button className="btn btn-xs">Xem giao dịch</button>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Tiền mặt trong tay</div>
        <div className="stat-value">$5,600</div>
        <div className="stat-actions">
          <button className="btn btn-xs">Xem giao dịch</button>
        </div>
      </div>
    </div>
  );
}

export default AmountStats;
