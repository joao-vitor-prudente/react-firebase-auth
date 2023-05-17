import { ProtectedRoute } from "./components/ProtectedRoute";

export const Home = () => {
  return (
    <ProtectedRoute>
      <>Home</>
    </ProtectedRoute>
  );
};
