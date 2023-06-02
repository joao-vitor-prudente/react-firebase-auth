import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { firebaseService } from "../../services/firebaseService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AppRoutes } from "../../constants/routes";
import { useForm } from "react-hook-form";

type SignInFormInputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const navigator = useNavigate();

  useEffect(() => {
    if (firebaseService.auth.currentUser) navigator(AppRoutes.HOME);
  }, []);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(firebaseService.auth);

  useEffect(() => user && navigator(AppRoutes.HOME), [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const onSubmit = async (data: SignInFormInputs) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email-input">Email</label>
      <input
        id="email-input"
        type="text"
        {...register("email", { required: true })}
      />
      {errors.email && <span>Email inválido</span>}
      <label htmlFor="password-input">Senha</label>
      <input
        id="password-input"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.email && <span>Senha inválida</span>}
      <input type="submit" value="Entrar" />
      {loading && <span>Carregando...</span>}
      {error && <span>Email ou senha incorretos</span>}
    </form>
  );
};
