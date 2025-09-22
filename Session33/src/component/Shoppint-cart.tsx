import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../store/store";
import type { CartProduct, Product } from "../type";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const cart = useSelector((state: RootState) => state.cart);
  const message = useSelector((state: RootState) => state.message);

  const addToCart = (product: Product, qty: number) => {
  const existing = cart.find((c) => c.id === product.id);
  const newQty = (existing?.quantity || 0) + qty;

  if (newQty > product.stock) {
    dispatch({ type: "SET_MESSAGE", payload: "Số lượng sản phẩm vượt quá số lượng trong kho" });
    setTimeout(() => dispatch({ type: "CLEAR_MESSAGE" }), 2000);
    return;
  }

  dispatch({ type: "ADD_TO_CART", payload: { product, quantity: qty } });
  dispatch({ type: "SET_MESSAGE", payload: "Add to cart successfully" });
  setTimeout(() => dispatch({ type: "CLEAR_MESSAGE" }), 2000);
};


  const updateQuantity = (id: number, qty: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: qty } });

  const deleteItem = (id: number) =>
    dispatch({ type: "DELETE_ITEM", payload: { id } });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ border: "1px solid #007bff", flex: 1, borderRadius: "5px" }}>
          <div style={{ backgroundColor: "#337ab7", padding: "5px", color: "white" }}>
            <h3>List Products</h3>
          </div>
          {products.map((p) => (
            <ProductItem key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
        <div
          style={{
            border: "1px solid #f5c6cb",
            background: "#ffffff",
            flex: 1,
            borderRadius: "5px",
          }}
        >
          <div style={{ backgroundColor: "#f2dede", padding: "10px" }}>
            <h3 style={{ color: "#ba6683" }}>Your Cart</h3>
          </div>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginBottom: "10px",
                }}
              >
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      index={index}
                      updateQuantity={updateQuantity}
                      deleteItem={deleteItem}
                    />
                  ))}
                </tbody>
              </table>
              <h4 style={{ color: "red" }}>{total} USD</h4>
            </>
          )}
        </div>
      </div>

      {message && (
        <div
          style={{
            background: "#d4edda",
            color: "#155724",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

function ProductItem({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (p: Product, qty: number) => void;
}) {
  const [qty, setQty] = useState(1);
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "15px" }}>
      <img src={product.img} alt={product.name} width="100" />
      <div style={{ flex: 1 }}>
        <h4>{product.name}</h4>
        <p>{product.price} USD</p>
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(+e.target.value)}
          style={{ width: "50px", marginRight: "5px" }}
        />
        <button
          style={{ background: "orange", border: "none", padding: "5px 10px" }}
          onClick={() => addToCart(product, qty)}
        >
          {product.price}
        </button>
      </div>
    </div>
  );
}

function CartItem({
  item,
  index,
  updateQuantity,
  deleteItem,
}: {
  item: CartProduct;
  index: number;
  updateQuantity: (id: number, qty: number) => void;
  deleteItem: (id: number) => void;
}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.price} USD</td>
      <td>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, +e.target.value)}
          style={{ width: "50px" }}
        />
      </td>
      <td>
        <button
          style={{
            background: "#17a2b8",
            color: "white",
            border: "none",
            marginRight: "5px",
            padding: "3px 8px",
          }}
          onClick={() => updateQuantity(item.id, item.quantity)}
        >
          Update
        </button>
        <button
          style={{
            background: "#dc3545",
            color: "white",
            border: "none",
            padding: "3px 8px",
          }}
          onClick={() => deleteItem(item.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
