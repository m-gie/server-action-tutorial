import { getProducts } from "@/lib/actions/product.actions";
import Link from "next/link";

const Home = () => {
  const productsList = getProducts();
  // log the productsList to see if client can see the url
  console.log(productsList);
  // nothing will show in user's console because it's a server-side rendered page
  // we are serving user with the html content, not the data itself
  // NOTE: if you are running the app in development mode, you will see the log in the browser's console, because the page is being rendered on the client side - it won't show in production
  // additionally in most browsers a "Server" tag will be appended to the log, indicating that the log was generated on the server and won't be visible to the client in production
  return (
    <div className="justify-items-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        {productsList.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="flex items-center gap-4 bg-slate-700 my-2 rounded-lg p-4"
          >
            <h3>{product.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
