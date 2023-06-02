import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseService, firebaseService } from "../services/firebaseService";
import { Environments } from "../constants/environments";

export interface AuthRepositoryInterface {
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  getUser: () => any;
}

class AuthRepository implements AuthRepositoryInterface {
  firebaseService: FirebaseService;

  constructor(firebaseService: FirebaseService) {
    this.firebaseService = firebaseService;
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(
      this.firebaseService.auth,
      email,
      password
    );
  }

  async logout() {
    return await this.firebaseService.auth.signOut();
  }

  getUser() {
    return this.firebaseService.auth.currentUser;
  }
}

class MockAuthRepository implements AuthRepositoryInterface {
  login(email: string, password: string) {
    console.log("logging in...");
    console.log({ email, password });
    return Promise.resolve({});
  }

  logout() {
    console.log("logging out...");
    return Promise.resolve();
  }

  getUser() {
    console.log("getting user...");
    return {};
  }
}

export const authRepository =
  import.meta.env.NODE_ENV === Environments.PRODUCTION
    ? new AuthRepository(firebaseService)
    : new MockAuthRepository();
