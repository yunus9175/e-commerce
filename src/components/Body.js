import { useEffect, useState } from "react";
import Card from "./Card";
import RestaurantsPageShimmer from "./RestaurantsPageShimmer";
import { FaSearch } from "react-icons/fa";
import { useRestrauntMenu } from "../hooks/useRestrauntMenu";
const Body = () => {
  const { loading, data } = useRestrauntMenu();
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleFilter = () => {
    const filteredData = data?.filter((item) => {
      return item?.info?.name?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filteredData);
  };
  useEffect(() => {
    if (data?.length > 0) {
      setFilteredData(data);
    }
  }, [loading]);
  //conditional rendering
  if (loading) return <RestaurantsPageShimmer />;

  return (
    <div className="app-container ">
      <div className="flex gap-3 items-center mb-5 relative">
        <input
          type="text"
          name="search"
          id="search"
          className=" py-3 px-2.5 tex-sm flex-1 pl-10 pr-4 border-2 border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search by name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleFilter()}
          value={searchTerm}
        />{" "}
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400" />
        <button
          onClick={handleFilter}
          className="px-4 rounded-full py-3 bg-blue-700 hover:bg-blue-400 text-white absolute right-0 top-0.5 transform -translate-y-1/"
        >
          Search
        </button>
      </div>
      {!loading && data?.length === 0 && (
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-500">
          No products found!
        </h1>
      )}

      <div className="card-container">
        {filteredData?.map((res) => (
          <Card key={res?.info?.id} {...res?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
