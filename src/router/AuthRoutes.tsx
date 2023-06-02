import { AuthRoutes } from '../constants/routes';
import { SignIn } from '../pages/auth/SignIn';
import { SignOut } from '../pages/auth/SignOut';
import { RouteType } from './Router';

export const authRoutes = [
  { path: AuthRoutes.SIGN_IN, element: <SignIn />, protected: false },
  { path: AuthRoutes.SIGN_OUT, element: <SignOut />, protected: true },
] satisfies RouteType[];
