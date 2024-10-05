import React, { useEffect, useState } from "react";
import Section_Title from "../Section_Title/Section_Title";
import Product_Card from "../Product_Card/Product_Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = await fetch("/products.json");
    const res = await data.json();
    setProducts(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* this is section title component */}
      <Section_Title
        heading="Explore our Products and choose"
        description="Discover the best in technology with our curated selection of top-rated products.
Each item is chosen for its quality, performance, and innovative features, ensuring you get the best value for your investment."
      ></Section_Title>
      {/* this is products card section */}
      <div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {products.map((product, idx) => (
          <div key={idx}>
            <Product_Card product={product}></Product_Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
