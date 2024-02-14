import React, { ReactNode, createContext, useContext, useState } from "react";

interface ThemeContextProps {
	isDarkTheme: boolean;
	toggleTheme: () => void;
}

interface themeProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<themeProviderProps> = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

	const toggleTheme = () => {
		setIsDarkTheme((prevState) => !prevState);
		document.body.classList.toggle("theme-dark", !isDarkTheme);
	};

	return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
