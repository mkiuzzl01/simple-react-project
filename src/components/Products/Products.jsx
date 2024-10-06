import React, { useEffect, useState } from "react";
import Section_Title from "../Section_Title/Section_Title";
import Product_Card from "../Product_Card/Product_Card";
import Loader from "../../Utility/Loader";
import Empty from "../../Utility/Empty";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const data = await fetch("/products.json");
    const res = await data.json();
    setProducts(res);
    setFilteredItems(res);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  //   conditional filtering function
  const filterProducts = () => {
    setLoading(true);

    let items = products;
    const Price = parseInt(price);

    if (category !== "") {
      // filter by category
      items = items.filter((product) => product.Category === category);
      setLoading(false);
    }
    // filter by price
    if (price !== "") {
      if (Price === 500) {
        items = items.filter(
          (item) => item?.Price >= 100 && item?.Price <= 500
        );
        setLoading(false);
      }

      if (Price === 1000) {
        items = items.filter(
          (item) => item?.Price >= 500 && item?.Price <= 1000
        );
        setLoading(false);
      }

      if (Price === 2000) {
        items = items.filter(
          (item) => item?.Price >= 1000 && item?.Price <= 2000
        );
        setLoading(false);
      }
      if (Price > 2000) {
        items = items.filter((item) => item?.Price > 2000);
      }
      setLoading(false);
    }
    setFilteredItems(items);
  };

  useEffect(() => {
    filterProducts();
  }, [category, price]);

  if (loading) return <Loader></Loader>;

  return (
    <div>
      {/* ========================================== */}
      {/* this is section title component */}
      <Section_Title
        heading="Explore our Products and choose"
        description={
          <>
            Discover the best in technology with our curated selection of
            top-rated products. <br />
            Each item is chosen for its quality, performance, and innovative
            features, ensuring you get the best value for your investment.
          </>
        }
      ></Section_Title>

      {/* ============================================= */}
      {/* this is product filtering section */}
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-5">
          <div>
            <select
              className="w-52 border-2 rounded-md"
              name="category"
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" selected>
                Default
              </option>
              {products.map((product, idx) => (
                <option key={idx} value={product?.Category}>
                  {product?.Category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="w-52 border-2 rounded-md"
              name="price"
              defaultValue={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="" selected>
                Default
              </option>
              <option value="500">100 to 500</option>
              <option value="1000">500 to 1000</option>
              <option value="2000">1000 to 2000</option>
              <option value="3000">2000 +</option>
            </select>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* this is products card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {filteredItems.map((product, idx) => (
          <div key={idx}>
            <Product_Card product={product}></Product_Card>
          </div>
        ))}
      </div>
      <div>{!filteredItems.length && !loading && <Empty></Empty>}</div>
    </div>
  );
};

export default Products;
