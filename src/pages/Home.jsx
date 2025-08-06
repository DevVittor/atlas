import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import Card from "../components/Card";
import Product from "../components/Product";

export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <div className="2xl:columns-6 xl:columns-5 lg:columns-4 md:columns-3 sm:columns-2 columns-1 gap-2 md:p-3 p-2 w-full">
        {Array.from({ length: 40 }).map((_, index) => (
          <Link to="/produto/1" key={index}>
            <Product />
          </Link>
        ))}
      </div>
    </div>
  );
}
