import React, { createContext, useState, useEffect } from "react";

export interface User {
  username: string;
  role: "admin" | "user" | "supervisor";
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  getAllSupervisors: () => User[];
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const USERS: User[] = [
    { username: "juan", role: "user" },
    { username: "admin", role: "admin" },
    { username: "angel", role: "supervisor" },
  ];

  const PASSWORDS: Record<string, string> = {
    juan: "1234",
    admin: "1234",
    angel: "1234",
  };

  const login = async (username: string, password: string) => {
    const foundUser = USERS.find((u) => u.username === username);

    if (foundUser && PASSWORDS[username] === password) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const getAllSupervisors = () => {
    return USERS.filter(u => u.role === "supervisor" || u.role === "admin");
  }

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, getAllSupervisors }}>
      {children}
    </AuthContext.Provider>
  );
};