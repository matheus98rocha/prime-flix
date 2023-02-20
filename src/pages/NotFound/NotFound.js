import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import { NotFoundWrapper } from "./notFound.styles.js";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <TbError404 className="icon" />
      <p>Página Não encontrada</p>
      <p>
        Voltar para a <Link to="/">Página inicial</Link>
      </p>
    </NotFoundWrapper>
  );
};

export default NotFound;
