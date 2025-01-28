import moment from "moment";
import { useEffect, useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";
import { RECENT_TRANSACTIONS, CUSTOMERS } from "../../utils/dummyData";
import FunnelIcon from "@heroicons/react/24/outline/FunnelIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import SearchBar from "../../components/Input/SearchBar";

const TopSideButtons = ({ applySearch }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    applySearch(searchText); // Gọi applySearch mỗi khi searchText thay đổi
  }, [searchText]);

  return (
    <div className="inline-block float-right">
      <SearchBar
        searchText={searchText}
        styleClass="mr-4"
        setSearchText={setSearchText}
        placeholderText="Tìm theo tên hoặc email"
      />
    </div>
  );
};

function Customers() {
  const [information, setInformation] = useState(CUSTOMERS);

  // Search according to name or email
  const applySearch = (value) => {
    if (!value) {
      setInformation(CUSTOMERS); // Hiển thị tất cả nếu giá trị tìm kiếm rỗng
    } else {
      const filteredData = CUSTOMERS.filter(
        (customer) =>
          customer.name.toLowerCase().includes(value.toLowerCase()) ||
          customer.email.toLowerCase().includes(value.toLowerCase())
      );
      setInformation(filteredData);
    }
  };

  return (
    <>
      <TitleCard
        title="Thông tin khách hàng"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons applySearch={applySearch} />}
      >
        {/* Team Member list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {information.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={l.avatar} alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{l.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{l.email}</td>
                    <td>{l.phone}</td>

                    <td>{l.location}</td>
                    <td>{moment(l.date).format("D MMM")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Customers;
