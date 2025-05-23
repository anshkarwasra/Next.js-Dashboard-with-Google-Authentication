"use client"
import React, { createContext, useContext, useState } from 'react'

const SideBarContext = createContext();

// Custom hook to use the sidebar context
export const useSidebar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <SideBarContext.Provider value={{ 
      isOpen, 
      setIsOpen, 
      toggleSidebar, 
      closeSidebar, 
      openSidebar 
    }}>
      {children}
    </SideBarContext.Provider>
  )
}

export default SidebarProvider;