import ProductCard from "./ProductCard";
import { products } from "../../data";

type Props = {
  onAddToCart: (id: number) => void;
};

export default function ProductList({ onAddToCart }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
          onAddToCart={() => onAddToCart(p.id)}
        />
      ))}
    </div>
  );
}
