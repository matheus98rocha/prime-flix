import { Link } from "react-router-dom";
import "./notFound.css";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="notFound">
      <TbError404 className="icon" />
      <p>Página Não encontrada</p>
      <p>
        Voltar para a <Link to="/">Página inicial</Link>
      </p>
    </div>
  );
};

export default NotFound;
