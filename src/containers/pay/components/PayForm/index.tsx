import { FormStyled } from "./styles";

export const PayForm = () => {
  return (
    <FormStyled>
      <div className="form-control">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="correo@exa.com"
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
          />
          <input type="text" name="card-exp" placeholder="MM / YY" />
          <input type="number" name="card-cvc" placeholder="CVC" />
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="card-name">Nombre en la tarjeta</label>
        <input
          type="text"
          id="card-name"
          name="card-name"
          placeholder="Lupito Perez"
        />
      </div>

      <input className="submit" type="submit" value="Pagar $227.48" />
    </FormStyled>
  );
};
