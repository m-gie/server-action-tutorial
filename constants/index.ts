import { Product, User } from "@/types";

export const products: Product[] = [
  {
    id: "214b2b3foiswe09wfe",
    name: "Product 1",
    price: 100,
    description: "Description 1",
    downloadUrl: "http://download.com/product1",
  },
  {
    id: "32hjb23jkr2lk3j3kk",
    name: "Product 2",
    price: 200,
    description: "Description 2",
    downloadUrl: "http://download.com/product2",
  },
  {
    id: "v7dl23k23nrk2j3nr2",
    name: "Product 3",
    price: 300,
    description: "Description 3",
    downloadUrl: "http://download.com/product3",
  },
  {
    id: "9vernwukr3hnb33r33",
    name: "Product 4",
    price: 400,
    description: "Description 4",
    downloadUrl: "http://download.com/product4",
  },
];

export const users: User[] = [
  {
    id: "jh23b5jk34tn34kjtn3",
    name: "John Doe",
    email: "john@doe.com",
    userSubscription: true,
  },
  {
    id: "k34j5b34kj5b34kj5b3",
    name: "Jane Smith",
    email: "jane@smith.com",
    userSubscription: false,
  },
  {
    id: "b34kj5b34kj5b34kj5b",
    name: "Alice Johnson",
    email: "alice@johnson.com",
    userSubscription: true,
  },
  {
    id: "c34kj5b34kj5b34kj5b",
    name: "Bob Brown",
    email: "bob@brown.com",
    userSubscription: false,
  },
];
