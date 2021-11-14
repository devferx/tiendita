import { useContext } from "react";

import { CartContext } from "../../../../context/CartContext";
import { FormStyled } from "./styles";

export const PayForm = () => {
  const { totalPrice } = useContext(CartContext);
  return (
    <FormStyled>
      <div className="form-control">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="correo@exa.com"
          required
        />
      </div>

      <div className="form-control form-control-card">
        <label htmlFor="card-number">Información de la tarjeta</label>
        <div className="grid">
          <input
            id="card-number"
            type="number"
            name="card-number"
            placeholder="1234 1234 1234 1234"
            required
          />
          <input
            type="text"
            name="card-exp"
            placeholder="MM / YY"
            minLength={5}
            maxLength={5}
            required
          />
          <input
            type="number"
            name="card-cvc"
            placeholder="CVC"
            min={100}
            max={999}
            required
          />
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="card-name">Nombre en la tarjeta</label>
        <input
          type="text"
          id="card-name"
          name="card-name"
          placeholder="Lupito Perez"
          minLength={3}
          required
        />
      </div>

      <input className="submit" type="submit" value={`Pagar $${totalPrice}`} />
    </FormStyled>
  );
};
