import { AppRoutes } from '../constants/routes';
import { Home } from '../pages/app/Home';
import { NotFound } from '../pages/app/NotFound';
import { RouteType } from './Router';

export const appRoutes = [
  { path: AppRoutes.HOME, element: <Home />, protected: true },
  { path: '*', element: <NotFound />, protected: false },
] satisfies RouteType[];
