// MyContext.js
import React from 'react';

// Create a context
const MyContext = React.createContext();

// Export a provider and consumer
export const MyProvider = MyContext.Provider;
export const MyConsumer = MyContext.Consumer;

export default MyContext;
