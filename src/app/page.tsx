import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Home = async () => {
  const { user } = await getCurrentSession();
  const products = await getAllProducts();

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {product.image && (
                <img
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {product.description}
                </p>
                <p className="text-gray-900 font-bold mt-4">
                  ${product.price?.toFixed(2)}
                </p>
                <Link href={`/product/${product._id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
