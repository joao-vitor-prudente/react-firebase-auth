import { User } from 'firebase/auth';
import { createContext } from 'react';

export type UserContextType = {
  user: User | undefined | null;
  loading: boolean;
  error: Error | undefined;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({
  value,
  children,
}: {
  value: UserContextType;
  children: React.ReactNode;
}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
