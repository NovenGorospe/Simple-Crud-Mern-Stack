import React from 'react';

// Context object

const UserContext = React.createContext();

// Provider-component to allow another component to produce or supply obeject

export const UserProvider = UserContext.Provider;
export default UserContext;