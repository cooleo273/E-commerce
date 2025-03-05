"use client";
import { Product } from "@/sanity.types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "../ui/button";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Card className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-60 w-full group">
        {product.image ? (
          <>
            <Image
              src={urlFor(product.image).url()}
              alt={product.title || "Product Image"}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </>
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            No Image
          </div>
        )}
      </div>
      <CardHeader className="px-6 py-3 bg-white">
        <CardTitle className="text-xl font-bold text-gray-800">
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 py-3 bg-white">
        <CardDescription className="text-gray-600 text-sm line-clamp-3">
          {product.description}
        </CardDescription>
      </CardContent>
      {product.price !== undefined && (
        <CardFooter className="px-6 py-3 bg-white border-t border-gray-200 flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          <Button className="px-6 py-2 bg-gradient-to-br from-purple-400 to-purple-600 hover:from-blue-200 hover:to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg transition-all duration-300">
            View Details
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductItem;
