'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { firebaseService } from '../../services/firebaseService';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const [status, setStatus] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (firebaseService.getCurrentUser()) navigate('/');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      await firebaseService.login(email, password);
    } catch (error: any) {
      setStatus('Email ou senha incorretos.');
      return;
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      <span>{errors.email && 'Email é obrigatório.'}</span>
      <input {...register('password', { required: true })} />
      <span>{errors.password && 'Senha é obrigatória.'}</span>
      <input type="submit" />
      <span>{status}</span>
    </form>
  );
};
