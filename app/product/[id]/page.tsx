"use client";
import React from "react";
import { useParams } from "next/navigation";
import { users } from "@/constants";
import { getProduct } from "@/lib/actions/product.actions";

const ProductPage = () => {
  // let's get the user from the mock database (/constants)
  // users 0 and 2 have the subscription, users 1 and 3 don't
  // you can change the user by changing the index, and see how the console.log() changes
  const auth = {
    user: users[0],
  };
  const params = useParams<{ id: string }>();
  const product = getProduct({ productId: params.id, userId: auth.user.id });
  // let's console.log the product, to see if user can see the downloadUrl
  console.log(product);
  // if user has no subscription, the downloadUrl will be null
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-slate-600 p-10 rounded-lg flex gap-2 flex-col">
        <h1 className="font-bold text-xl">{product?.name}</h1>
        <p className="text-gray-300">{product?.description}</p>
        {/* Here we show different buttons, depending on the userSubscription */}
        {auth.user.userSubscription ? (
          <button className="bg-green-500 p-2 rounded-md font-bold w-full">
            Download
          </button>
        ) : (
          <button className="bg-red-500 p-2 rounded-md font-bold w-full">
            ${product.price}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
