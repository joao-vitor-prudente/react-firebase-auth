import { Router } from './router/Router';
import { UserProvider } from './pages/auth/contexts/UserContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseService } from './services/firebaseService';


export const App = () => {
  const [user, loading, error] = useAuthState(firebaseService.auth);
  
  return (
    <UserProvider value={{ user, loading, error }}>
      <Router />
    </UserProvider>
  );
};
