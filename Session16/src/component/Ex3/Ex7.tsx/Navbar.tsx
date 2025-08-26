type Props = {
  cartCount: number;
};

export default function Navbar({ cartCount }: Props) {
  return (
    <nav className="bg-orange-500 text-white flex justify-between px-6 py-3 items-center">
      <div className="flex gap-6">
        <a href="" className="hover:underline">Trang chủ</a>
        <a href="" className="hover:underline">Danh sách sản phẩm</a>
      </div>
      <div className="relative text-2xl">
        🛒
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
            {cartCount}
          </span>
        )}
      </div>
    </nav>
  );
}
