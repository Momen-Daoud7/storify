import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("65378034ce27a8bb0e14a977");
console.log(products)
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard &&
        <Billboard 
          data={billboard}
        />}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {products && <ProductList title="Featured Products" items={products} />}
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
