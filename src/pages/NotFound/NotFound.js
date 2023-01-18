import { Link } from "react-router-dom";
import "./notFound.css";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="notFound">
      <TbError404 className="icon" />
      <p>We couldn't find that page</p>
      <p>
        Go back to our <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
