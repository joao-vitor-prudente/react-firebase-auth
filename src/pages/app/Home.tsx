import { useContext } from "react";
import { UserContext, UserContextType } from "../auth/contexts/UserContext";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Link } from "react-router-dom";
import { AuthRoutes } from "../../constants/routes";

export const Home = () => {
  const { user, loading, error } = useContext(UserContext) as UserContextType;
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      {user && <span>Hello, {user.email}</span>}
      <Link to={AuthRoutes.SIGN_OUT}>Sign Out</Link>
    </>
  );
};
