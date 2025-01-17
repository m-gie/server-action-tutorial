import { products, users } from "@/constants";
import { Product } from "@/types";
import { redirect } from "next/navigation";
export function getProducts() {
  // fetch products from api
  // we will use our fake products from /constants
  // it should be wrapped in trycatch, but for simplicity we will skip it, assuming the product list will be retrieved successfully
  const productsList = products;
  return productsList;
}

export function getProduct({
  productId,
  userId,
}: {
  productId: string;
  userId: string;
}) {
  // fetch product from api
  // we will use our fake products from /constants
  try {
    // fetch the product from the mock api, based on the productId we provided
    // server actions are run on the server, so user can't see the data processed here
    //user will have access only to the data that we return from the function
    const product = products.find((product) => product.id === productId);
    // if product not found, throw an error
    if (!product) {
      throw new Error("Product not found");
    }
    // fetch user from the mock api, based on the userId we provided
    const user = users.find((user) => user.id === userId);
    // if user not found, throw an error
    if (!user) {
      throw new Error("User not found");
    }
    // if user has a subscription, return the product
    if (user?.userSubscription) {
      return product;
    } else {
      // if user has no subscription, return a product with downloadUrl as null
      const lockedProduct: Product = {
        id: product?.id,
        name: product?.name,
        price: product?.price,
        description: product?.description,
        downloadUrl: null,
      };
      return lockedProduct;
    }
  } catch (error) {
    // if we have an error, log it and redirect to 404 page for simplicity
    console.error(error);
    redirect("/404");
  }
}
