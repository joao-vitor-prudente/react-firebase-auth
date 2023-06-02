import { useEffect } from 'react';
import { firebaseService } from '../../services/firebaseService';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../app/Loading';

export const SignOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const logout = async () => await firebaseService.auth.signOut();
    logout().then(() => navigate('/'));
  }, []);

  return <Loading />;
};
