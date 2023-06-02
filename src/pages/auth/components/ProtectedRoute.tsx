import { Unauthorized } from '../Unauthorized';
import { Loading } from '../../app/Loading';
import { Error } from '../../app/Error';
import { useContext } from 'react';
import { UserContext, UserContextType } from '../contexts/UserContext';

type ProtectedRouteProps = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading, error } = useContext(
    UserContext
  ) as UserContextType;

  if (loading) return <Loading />;
  if (error) return <Error />;

  if (!user) return <Unauthorized />;

  return children;
};
