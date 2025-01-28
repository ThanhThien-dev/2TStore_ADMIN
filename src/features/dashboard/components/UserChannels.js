import TitleCard from "../../../components/Cards/TitleCard";

const userSourceData = [
  { name: "Set đồ thể thao MU", price: "26,345", conversionPercent: 10.2 },
  {
    name: "Set đồ thể thao Việt Nam",
    price: "21,341",
    conversionPercent: 11.7,
  },
  { name: "Giày Adidas", price: "34,379", conversionPercent: 12.4 },
  { name: "Vớ Adidas", price: "12,359", conversionPercent: 20.9 },
  { name: "Băng quấn đầu gối", price: "10,345", conversionPercent: 10.3 },
];

function UserChannels() {
  return (
    <TitleCard title={"Top Selling Products"}>
      {/** Table Data */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="normal-case">Product</th>
              <th className="normal-case">Price</th>
              <th className="normal-case">Conversion</th>
            </tr>
          </thead>
          <tbody>
            {userSourceData.map((u, k) => {
              return (
                <tr key={k}>
                  <th>{k + 1}</th>
                  <td>{u.name}</td>
                  <td>{u.price}</td>
                  <td>{`${u.conversionPercent}%`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
}

export default UserChannels;
