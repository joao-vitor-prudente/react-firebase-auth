import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { authRoutes } from './AuthRoutes';
import { appRoutes } from './AppRoutes';
import { Loading } from '../pages/app/Loading';
import { ProtectedRoute } from '../pages/auth/components/ProtectedRoute';
import { Error } from '../pages/app/Error';

export type RouteType = {
  path: string;
  element: JSX.Element;
  protected: boolean;
};

const protectRoute = (element: JSX.Element) => (
  <ProtectedRoute>{element}</ProtectedRoute>
);

const getRoutes = (label: string, routes: RouteType[]) =>
  routes.map((route, index) => (
    <Route
      key={`${label} ${index}`}
      loader={Loading}
      ErrorBoundary={Error}
      errorElement={<Error />}
      path={route.path}
      element={
        route.protected
          ? protectRoute(route.element)
          : route.element
      }
    />
  ));

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {getRoutes('App', appRoutes)}
          {getRoutes('Auth', authRoutes)}
        </Routes>
      </BrowserRouter>
    </>
  );
};
