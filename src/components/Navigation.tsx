import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navigation: React.FC = () => {
	return (
		<nav className="navigation">
			<h1>My App</h1>
			<ThemeToggle />
		</nav>
	);
};

export default Navigation;
