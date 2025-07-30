"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Tip tanımla
type AppContextType = {
    theme: string;
    setTheme: (value: string) => void;
};

// 2. Context oluştur
const AppContext = createContext<AppContextType | undefined>(undefined);

// 3. Provider bileşeni
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("light");

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
};

// 4. Custom hook
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
