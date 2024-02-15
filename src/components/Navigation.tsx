import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navigation: React.FC = () => {
	return (
		<nav className="navbar">
			<div>
				<div>Home</div>
				<div>About</div>
				<div>Blog</div>
			</div>
			<ThemeToggle />
		</nav>
	);
};

export default Navigation;
