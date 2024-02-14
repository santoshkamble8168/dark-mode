import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
	const { isDarkTheme, toggleTheme } = useTheme();

	console.log(isDarkTheme);

	return (
		<div className="theme-toggle">
			<button className={isDarkTheme ? "dark-mode" : "light-mode"} onClick={toggleTheme}>
				<span className="sr-only"></span>
			</button>
		</div>
	);
};

export default ThemeToggle;
