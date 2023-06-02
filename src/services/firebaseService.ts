import { initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebaseConfig';
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';
import { Auth } from 'firebase/auth';

export class FirebaseService {
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
}
export const firebaseService = await new FirebaseService(
  firebaseConfig
).configure();
