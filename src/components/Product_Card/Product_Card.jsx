import React from "react";
const Product_Card = ({ product }) => {
  return (
    <div
      className="p-5 flex justify-center items-center border-2 rounded-lg gap-4 hover:shadow-md duration-300 hover:shadow-green-300"
    >
      <div className="flex items-center justify-center">
        <img className="w-64" src={product?.ProductImage} alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-medium">{product?.ProductName}</h1>
        <p>{product?.Description}</p>
        <p className="text-orange-500 font-semibold"> $ {product?.Price}</p>
        <p className="text-yellow-500">
          Rating <span>{product?.Ratings}</span>
        </p>
        <div>
          <button className="btn border-none py-2 px-4 hover:bg-green-500 rounded-lg bg-green-300 mt-2 border-2">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product_Card;
