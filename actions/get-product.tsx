import { Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(
    `http://localhost:3000/api/65377872b903f3d16e45b6b8/products`
  );

  return res.json();
};

export default getProduct;
