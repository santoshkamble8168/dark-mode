import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	console.log(theme);

	return (
		<div className="mode-switch">
			<label>
				<input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
				<span className="slider round"></span>
			</label>
		</div>
	);
};

export default ThemeToggle;
