import Link from "next/link";
import { HeaderStyled } from "./styles";

export const PayHeader = () => {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <Link href="/">
          <a className="link">
            <img src="/assets/icons/back.svg" alt="Back Icon" />
            <span>Volver</span>
          </a>
        </Link>
      </div>
    </HeaderStyled>
  );
};
