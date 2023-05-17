import { firebaseService } from '../../../services/firebaseService';
import { Unauthorized } from '../../auth/Unauthorized';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return firebaseService.auth.currentUser ? children : <Unauthorized />;
};
