import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart-container">
      <h3>Carrito</h3>
      <div className="cart-item-head">
        <h5>Producto</h5>
        <h5>Detalle</h5>
        <h5></h5>
        <h5>Monto</h5>
      </div>
      <div className="cart-item">
        <img src="/src/assets/imgs/Detail.webp"></img>
        <p>
          Tee Camisa <br />
          <br />
          $$ 450
        </p>
        <i class="fa-solid fa-trash"></i>
        <p>$$ 150000</p>
      </div>
      <div className="cart-item">
        <img src="/src/assets/imgs/Detail.webp"></img>
        <p>
          Tee Camisa <br />
          <br />
          $$ 450
        </p>
        <i class="fa-solid fa-trash"></i>
        <p>$$ 150000</p>
      </div>
      <div className="cart-item">
        <img src="/src/assets/imgs/Detail.webp"></img>
        <p>
          Tee Camisa <br />
          <br />
          $$ 450
        </p>
        <i class="fa-solid fa-trash"></i>
        <p>$$ 150000</p>
      </div>
      <div className="cart-item-cancel">
        <div className="item-cancelacion">
          <p>Monto total: $$ Suma</p>
          <button>Pagar pedido</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
