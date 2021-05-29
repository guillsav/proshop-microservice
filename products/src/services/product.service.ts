import { Product, ProductAttrs, ProductDoc } from '../model';

const add = async (
  attrs: ProductAttrs,
  userId: string
): Promise<ProductDoc> => {
  const { name, image, brand, category, description, price, countInStock } =
    attrs;

  const product = await Product.build({
    name,
    image,
    brand,
    category,
    description,
    price,
    countInStock,
    userId
  }).save();

  return product;
};

const fetch = async (): Promise<ProductDoc[]> => {
  const products = await Product.find({});
  return products;
};

export default { add, fetch };