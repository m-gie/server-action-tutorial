export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  downloadUrl: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  userSubscription: boolean;
}
