import { getCurrentSession } from "@/actions/auth";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Home = async () => {
  const { user } = await getCurrentSession();
  const products = await getAllProducts();

  return (
    <div>
      <SalesCampaignBanner/>
      <section>
        <ProductGrid products={products}/>
      </section>
    </div>
  );
};

export default Home;
