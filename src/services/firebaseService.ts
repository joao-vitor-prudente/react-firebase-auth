import { initializeApp } from "firebase/app";
import type { FirebaseApp } from "firebase/app";
import { firebaseConfig } from "../config/firebaseConfig";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Auth } from "firebase/auth";

class FirebaseService {
  app: FirebaseApp;
  auth: Auth;
  private config: typeof firebaseConfig;

  constructor(config: typeof firebaseConfig) {
    this.config = config;
    this.app = initializeApp(this.config);
    this.auth = getAuth(this.app);
  }
  
  async configure() {
    await setPersistence(this.auth, browserLocalPersistence);
    return this;
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return await signOut(this.auth);
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

  async getToken() {
    return await this.auth.currentUser?.getIdToken();
  }
}
export const firebaseService = await new FirebaseService(firebaseConfig).configure();
