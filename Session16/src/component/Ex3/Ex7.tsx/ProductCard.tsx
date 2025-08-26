type Props = {
  image: string;
  name: string;
  price: number;
  onAddToCart: () => void;
};

export default function ProductCard({ image, name, price, onAddToCart }: Props) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white">
      <img src={image} alt={name} className="h-48 object-contain mb-4" />
      <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
      <p className="text-gray-700 mb-3">
        {price.toLocaleString("vi-VN")} ₫
      </p>
      <button
        onClick={onAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
      >
        🛒 Thêm vào giỏ hàng
      </button>
    </div>
  );
}
