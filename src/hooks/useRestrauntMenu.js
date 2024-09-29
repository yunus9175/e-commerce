import React, { useEffect, useState } from "react";

export const useRestrauntMenu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResturantData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&"
        );
        const resturants = await response.json();
        setData(
          resturants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchResturantData();
  }, []);
  return {
    data,
    loading,
  };
};
