import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import Card from "../components/Card";
import Product from "../components/Product";

export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <div className="2xl:columns-6 xl:columns-5 lg:columns-4 md:columns-3 columns-2 md:gap-2 gap-1 md:p-3 sm:p-2 p-1 w-full">
        {Array.from({ length: 40 }).map((_, index) => (
          <Link to="/produto/1" key={index}>
            <Product />
          </Link>
        ))}
      </div>
    </div>
  );
}
