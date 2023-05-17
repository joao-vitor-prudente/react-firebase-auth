import { Home } from "../pages/app/Home";
import { NotFound } from "../pages/app/NotFound";

export enum AppRoutes {
  HOME = "/",
}


export const appRoutes = [
  { path: AppRoutes.HOME, element: <Home />, protected: true },
  { path: "*", element: <NotFound />, protected: false },
];
