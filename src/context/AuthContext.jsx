import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

// Dummy seed users
const seedUsers = [
  { username: 'alice', password: 'password1' },
  { username: 'bob', password: 'password2' },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('rwa_user');
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch (e) {
        localStorage.removeItem('rwa_user');
      }
    }
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem('rwa_user', JSON.stringify(user));
    else localStorage.removeItem('rwa_user');
  }, [user]);

  const login = (username, password) => {
    const match = seedUsers.find(u => u.username === username && u.password === password);
    if (match) {
      setUser({ username: match.username });
      return { ok: true };
    }
    return { ok: false, message: 'Invalid username or password' };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
