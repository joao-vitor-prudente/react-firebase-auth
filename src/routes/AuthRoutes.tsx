import { SignIn } from "../pages/auth/SignIn";

export enum AuthRoutes {
  SIGN_IN = "/auth/sign-in",
}

export const authRoutes = [
  { path: AuthRoutes.SIGN_IN, element: <SignIn />, protected: false },
];
