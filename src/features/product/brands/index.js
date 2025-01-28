import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";

import SearchBar from "../../../components/Input/SearchBar";
import ModalBrand from "./modalBrand";

const fetchBrands = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const brands = await res.json();
    return brands.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

function Brands() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBrands = async () => {
      const brands = await fetchBrands();
      setBrands(brands);
    };
    getBrands();
  }, []);

  const handleAdd = (newBrand) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newBrand.title,
        thumbnail: newBrand.thumbnail,
        description: newBrand.description,
      }),
    }).then((res) => res.json());
  };

  return (
    <>
      <div className="flex mb-4 justify-between">
        <div>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>
        <div>
          <button
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-green-700"
            onClick={() => setIsModalOpen(true)}
          >
            Thêm mới
          </button>
        </div>
      </div>

      <div className="divider mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ModalBrand
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAdd}
        />

        {brands.map((i, k) => {
          return (
            <TitleCard
              key={k}
              title={i.title}
              className="text-center"
              topMargin={"mt-2"}
              titleAlign="text-center font-bold"
            >
              <div className="flex gap-4 items-start h-40">
                <img
                  alt="icon"
                  src={i.thumbnail}
                  className="w-16 h-16 object-contain"
                />
                <p className="flex-1">{i.description}</p>
              </div>
            </TitleCard>
          );
        })}
      </div>
    </>
  );
}

export default Brands;
