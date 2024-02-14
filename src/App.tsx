import React from "react";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import Home from "./components/Home";

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<div className="app">
				<Navigation />
				<Home />
			</div>
		</ThemeProvider>
	);
};

export default App;
