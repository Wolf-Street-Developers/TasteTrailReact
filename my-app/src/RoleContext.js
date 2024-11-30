import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const RoleContext = createContext();

// Custom hook to use the Role context
export const useRole = () => useContext(RoleContext);

// RoleProvider component that will wrap your app
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem('userRole') || 'guest'); // Initialize role from localStorage or default to 'guest'

  // Monitor changes to the role and update localStorage
  useEffect(() => {
    localStorage.setItem('userRole', role);
  }, [role]);

  // Update role function (you can call this whenever you need to change the role)
  const updateRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <RoleContext.Provider value={{ role, updateRole }}>
      {children}
    </RoleContext.Provider>
  );
};
