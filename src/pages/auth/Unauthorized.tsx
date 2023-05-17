import { Link } from "react-router-dom";
import { AuthRoutes } from "../../routes/AuthRoutes"

export const Unauthorized = () => {
  return (
    <Link to={AuthRoutes.SIGN_IN}>Faça login para acessar essa página.</Link>
  );
};
