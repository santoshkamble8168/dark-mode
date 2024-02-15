import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
	isDarkTheme: boolean;
	theme: string;
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
	};

	const theme = isDarkTheme ? "dark" : "light";

	useEffect(() => {
		document.body.classList.toggle("theme-dark", isDarkTheme);
		document.documentElement.setAttribute("data-theme", theme);
	}, [isDarkTheme]);

	return <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
