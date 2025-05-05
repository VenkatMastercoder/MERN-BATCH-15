import React, { useEffect, useState } from "react";

const useProductDetails = (product_id) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchProductsData();
  }, [product_id]);

  const fetchProductsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${product_id}`);
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading };
};

export default useProductDetails;
